import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { GetUserByEmail } from "../data/GetUserByEmail";
import { hash } from "bcryptjs";
import { HashManager } from "../services/HashManager";
import { User } from "../entities/Class";
import { connection } from "../data/connections";
import { Authenticator } from "../services/Authenticator";

export async function signup(req:Request, res: Response) {
    try {
        const {name, email, password, role} = req.body

        const id = generateId()

        const user = GetUserByEmail(email)

        const cipherPassword: string = new HashManager().generateHash(password)



        if (!name || !email || !password || !role){
            res
            .status(422)
            .send("Insira corretamente as informações de 'name', 'email', 'password', 'role'") 
        }

        if (user){
            res.status(409).send('email já cadastrado')
        }


    const newUser: User = {
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
        res.status(400).send(error.message)
    }
}

