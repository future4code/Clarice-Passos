import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import * as jwt from "jsonwebtoken";

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: string
  }

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id,
            role: info.role},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData

    }
}