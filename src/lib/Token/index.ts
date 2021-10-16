import jwt, { JwtPayload } from 'jsonwebtoken';
import Cookie from 'lib/Cookie';
import { UStorageType } from 'types/common/common.type';

class Token {
  public static getToken(key: string, type: UStorageType): string {
    if (type === 'cookie') {
      return Cookie.getCookie(key) as string;
    } else {
      return sessionStorage.getItem(key) as string;
    }
  }

  public static decodeToken(key: string) {
    const accessToken: string | null = sessionStorage.getItem(key);
    return jwt.decode(accessToken!) as JwtPayload;
  }

  public static setToken(key: string, token: string, type: UStorageType): void {
    if (type === 'cookie') {
      Cookie.setCookie(key, token);
    } else {
      sessionStorage.setItem(key, token);
    }
  }

  public removeToken(): void {
    Cookie.removeCookie('access-token');
    Cookie.removeCookie('refresh-token');
  }
}

export default Token;
