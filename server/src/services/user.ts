import { User } from 'models';

// 유저 조회
const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'provider', 'password', 'username'],
    where: {
      email: email,
      provider: 'email',
    },
  });
  return user;
};

export default {
  findUserByEmail,
};
