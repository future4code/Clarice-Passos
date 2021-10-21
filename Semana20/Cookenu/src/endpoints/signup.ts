import { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";
import { GetUserByEmail } from "../data/GetUserByEmail";
import { hash } from "bcryptjs";
import { HashManager } from "../services/HashManager";
import { user, USER_ROLES } from "../entities/Class";
import { connection } from "../data/connections";
import { Authenticator } from "../services/Authenticator";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { name, email, password, role } = req.body

    const user = await GetUserByEmail(email)

    const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = {
      id,
      name,
      email,
      password: cipherPassword,
      role
    }

    const token = new Authenticator().generateToken({
      id,
      role
    })

    if (!name || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'password' e 'email'")
    }

    if (!(role in USER_ROLES)) {
      res.statusCode = 422
      throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    await connection('usuario')
      .insert(newUser)

    res.status(201).send({
      message: "Usuário cadastrado com sucesso",
      newUser,
      token
    })



  } catch (error) {
    res.send({ message: error.sqlMessage || error.message })
  }

}