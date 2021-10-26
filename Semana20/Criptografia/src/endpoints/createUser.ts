import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user, USER_ROLES } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'password' e 'email'")
    } 

    if(   !(role in USER_ROLES)   ){
      res.statusCode = 422
      throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    const [user] = await connection('usuario')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = {
      id,
      name,
      email,
      password: cipherPassword,
      role
    }

    await connection('usuario')
      .insert(newUser)

    const token = new Authenticator().generateToken({ 
      id,
      role 
    })

    res.status(201).send({ newUser, token })

  } catch (error) {
      res.send({ message: error.sqlMessage || error.message })
  }
}