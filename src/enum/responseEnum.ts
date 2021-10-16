export enum EResponse {
  SUCCESS = 200,
}

export enum ErrorStatus {
  BADREQ = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  WRONGMETHOD = 405,
  CONFLICT = 409,
  NOUSER = 410,
}