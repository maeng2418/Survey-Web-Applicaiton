declare module 'dtos' {
  interface IUserData {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    provider?: string;
  }

  interface UserReq {
    email: string;
    password: string;
  }
}
