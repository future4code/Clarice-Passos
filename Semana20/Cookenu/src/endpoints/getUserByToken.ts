import { Request, Response } from "express";
import { connection } from "../data/connections";
import { GetUserByEmail } from "../data/GetUserByEmail";
import { authenticationData, user } from "../entities/Class";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { userInfo } from "../entities/Class";
import findUserById from "../data/findUserById";


export const getUserByToken = async (req: Request, res: Response) => {
  try {

    const token = req.headers.authorization

    if(!token){
      res.status(400).send('token nao autorizado')
    }

    const authenticator = new Authenticator

    const tokenData = authenticator.getTokenData(token)

    const user = await findUserById(tokenData.id);

    const result: userInfo = {
      id: user.id,
      email: user.email,
      role: user.role
  }

    res.status(200).send({ result })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}




