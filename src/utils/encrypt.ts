import { jwt } from "jsonwebtoken";
import CryptoJS from "crypto-js";

function generateToken(data: any): string {
    return jwt.sign(data, 6, null);
}

function crypt(): string{
  return CryptoJS.AES.encrypt((new Date).toString(), 'secret key 123').toString();
}

export const encrypt = {
  generateToken,
  crypt
}
