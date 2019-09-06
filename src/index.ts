import { hash, compare } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

export const APP_SECRET = process.env.APP_SECRET;

interface Token {
  userId: string;
}

interface Context {
  request: {
    get: (header: string) => any;
  };
}

let errorMessage = `The "APP_SECRET" env variable isn't set.`;

export const getUserId = (context: Context) => {
  const Authorization = context.request.get('Authorization');

  if (!APP_SECRET) {
    throw new Error(errorMessage);
  }

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }

  return null;
};

export const getToken = (userId: string) => {
  if (!APP_SECRET) {
    throw new Error(errorMessage);
  }

  return sign({ userId }, APP_SECRET);
};

export const authPayload = (user: any) => {
  return {
    user,
    token: getToken(user.id),
  };
};

export const getHashedPassword = (password: string) => hash(password, 10);

export const comparePassword = (password: string, confirm: string) =>
  compare(password, confirm);

export const contextWithRequest = (otherContextProps: any) => ({
  request,
}: any) => ({
  request,
  ...otherContextProps,
});
