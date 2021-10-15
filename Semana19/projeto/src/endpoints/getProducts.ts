import { Request, Response } from 'express';
import selectProduct from '../data/selectProduct';

export default async function getProduct(
    req: Request,
    res: Response

) {
    try {
        const users = await selectProduct()

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