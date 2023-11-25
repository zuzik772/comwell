import { decodeToken } from "react-jwt";

type TokenInfo = {
  sub: string;
  email: string;
  phone: number;

  iat: Date;
  exp: Date;
};

export const getTokenInfo = (token: string) => {
  if (!token) return { fullName: "", email: "", number: null };
  const decodedToken = decodeToken(token) as TokenInfo;
  return {
    fullName: decodedToken.sub,
    email: decodedToken.email,
    phone: decodedToken.phone,
  };
};
