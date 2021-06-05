import fs from 'fs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from 'models';
import { jwtSecret } from 'config/constants';

const readData = (file: string) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/${file}`, { encoding: 'utf-8' }));
};

const createAdminUser = async (body: {
  username: string;
  email: string;
  password: string;
  provider: string;
}): Promise<string> => {
  body.password = crypto.createHash('sha256').update(body.password).digest('base64');
  await User.create(body);

  return jwt.sign(
    {
      data: {
        username: body.username,
        email: body.email,
        provider: body.provider,
      },
    },
    jwtSecret,
    { expiresIn: '1d' }
  );
};
const bulkData = async (): Promise<void> => {
  // create Admin user
  const signupAdminUser = readData('./user.json');
  const token = await createAdminUser(signupAdminUser);
  console.log(`admin token: ${token}`);
};
export default bulkData;
