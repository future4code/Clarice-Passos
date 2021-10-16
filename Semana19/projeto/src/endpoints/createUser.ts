import { Request, Response } from 'express';
import insertUser from '../data/insertUser';
import { User } from '../class/User';

export default async function createUser(

    req: Request,
    res: Response
) { 
    const { name, email, age } = req.body
    try {

        if (
            !name ||
            !email ||
            !age
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
        }

        const id: string = Date.now() + Math.random().toString()
        const user: User = new User(name, email, age, id)
    
        await insertUser(
            user
        )
        
        res
         .status(200).send({
            message: 'Usuário criado com sucesso!',
             user
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}
