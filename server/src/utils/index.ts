import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/constants';

const verify = (token: string): Promise<JwtPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtConstants.secret, (err, decode) => {
      if (err) {
        reject(err);
      } else {
        resolve(decode);
      }
    });
  });
};
const createToken = (username: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data: username, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      jwtConstants.secret,
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      },
    );
  });
};
export { verify, createToken };
