import { User } from 'models';

// 테스트
const test = async (): Promise<any> => {
  try {
    return { id: 'id', password: 'password' };
  } catch (err) {
    throw Error(err);
  }
};

export default {
  test,
};
