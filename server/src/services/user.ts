import { User } from 'models';

// 유저 조회
const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'email', 'provider', 'password', 'username'],
      where: {
        email: email,
        provider: 'email',
      },
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findUserByEmail,
};
