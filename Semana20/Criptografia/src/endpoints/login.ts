import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (
  req: Request,
  res: Response
) => {
  try {

    // buscar usuário por email
    const { email, password } = req.body

    const [user] = await connection("usuario")
      .where({ email })

    // conferir se o usuário existe e a senha está correta

    const passwordIsCorrect:boolean = new HashManager().compareHash(password, user.password)

    if (!user || !passwordIsCorrect) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

    // gerar o token
    const token = new Authenticator().generateToken({
      id: user.id,
      role: user.role
    })

    // enviar a resposta
    res.send({ token })

  } catch (error) {
      res.send({ message: error.message })

  }
}