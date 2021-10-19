import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types";

const userId = async (id: string): Promise<any> => {
  let result = await connection.raw(`
    SELECT * FROM usuario 
    WHERE id = '${id}'
    `)
  return result[0][0]
}

function getTokenData(token: string) {
  throw new Error("Function not implemented.");
}

export const getUserById = async (req: Request, res: Response) => {

  try {

    const token = req.headers.authorization as string


    const tokenData = new Authenticator().getTokenData(token)


    const user = await userId(tokenData?.id)


    if (tokenData.role !== "NORMAL") {
      throw new Error("Only a normal user can access this funcionality");
    }

    res.status(200).send({ id: user.id, email: user.email })

  } catch (error: any) {

    res.status(400).send({ message: error.message });
  }
}


