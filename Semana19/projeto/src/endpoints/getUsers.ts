import { Request, Response } from 'express';
import { connection } from '../data/connection';
import selectUsers from '../data/selectUsers';
import { User } from '../class/User';

export default async function getUsers(
    req: Request,
    res: Response

) {
    try {
        const users = await selectUsers()

        res.status(200).send({
            message: 'Sucesso!!',
            users
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}