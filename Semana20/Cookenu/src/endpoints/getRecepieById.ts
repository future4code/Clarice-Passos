import { Request, Response } from 'express';
import findRecepieById from '../data/findRecepieById'
import { login } from './login';

export default async function getRecepieById(
    req: Request,
    res: Response

) {
    try {
        const recepie = await findRecepieById(req.params.id)

        if (!recepie) {
            res.status(404).send({
                message: 'Receita não encontrado'
            })
        }

        if(!login){
            res.status(409).send({
                message: 'Usuário não autorizado'
            })
        }
        res.status(200).send({
            message: 'Sucesso!!',
            recepie
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


