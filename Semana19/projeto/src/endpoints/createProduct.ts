import { Request, Response } from 'express';
import insertProduct from '../data/insertProduct';


export default async function createProduct(

    req: Request,
    res: Response
) {

    const { name, description, price } = req.body

    try {

        if (
            !name ||
            !description ||
            !price
        ) {
            res.status(400).send({
                message: 'Preencha todos os campos!'
            })
        }

        const id: string = Date.now() + Math.random().toString()

        await insertProduct(
            id,
            name,
            description,
            price
        )
        res
            .status(200).send({
                message: 'Produto criado com sucesso!',
                id,
                name: name,
                description: description,
                price: price
            })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}
