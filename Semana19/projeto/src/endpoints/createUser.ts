import { Request, Response } from 'express';
import insertUser from '../data/insertUser';
import { User } from '../class/User';

export default async function createUser(

    req: Request,
    res: Response
) {
    const id: string = Date.now() + Math.random().toString()
    const { name, email, age } = req.body
    const user: User = new User(name, email, age, id)

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


        await insertUser(
            name,
            email,
            age,
            id
        )
        res
            .status(200).send({
                message: 'Usuário criado com sucesso!',
                id,
                name: name,
                email: email,
                age: age
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}
