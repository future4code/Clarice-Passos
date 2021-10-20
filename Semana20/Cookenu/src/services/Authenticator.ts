import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { User } from "../entities/Class";

dotenv.config()

export class Authenticator {

  public generateToken = (
    payload: User
  ): string => {

    const token = sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: "10h" }
    )

    return token
  }

  public getTokenData = (
    token: string
  ): User | null => {
    try {

      const tokenData = verify(
        token,
        process.env.JWT_KEY
      ) as JwtPayload

      return {
        id: tokenData.id,
        role: tokenData.role
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }
}