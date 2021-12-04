import { Request, Response } from 'express';
import { connection } from '../data/connections';
import findUserById from '../data/findUserById';

export default async function getUserById(
    req: Request,
    res: Response

) {
    try {

        const user = await findUserById(req.params.id)

        if (!user) {
            res.status(404).send({
                message: 'Usuarios não encontrado'
            })
        }
        res.status(200).send({
            message: 'Sucesso!!',
            user
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}