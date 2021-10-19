import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { userInfo } from "../types";

const userId = async (id: string): Promise<any> => {
  const [result] = await connection('usuario')
  .where({id})
return result
}


export const getUserById = async (req: Request, res: Response) => {

  try {

    const token = req.headers.authorization as string


    const tokenData = new Authenticator().getTokenData(token)


    const user = await userId(tokenData?.id)


    if (!tokenData) {
      throw new Error("Não autorizado");
    }

    const result: userInfo = {
      id: user.id,
      email: user.email,
      role: user.role
  }

    res.status(200).send({ result })

  } catch (error: any) {

    res.status(400).send({ message: error.message });
  }
}


