import { insertPost } from "../data/post/insertPost"
import { getTokenData } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { authenticationData } from "../type/user"
import { Request, Response } from "express"
import { createPostBusiness } from "../business/createPostBusiness"
import { POST_TYPES } from "../type/post"

export class PostController {
    createPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            let message = "Success!"


            const { photo, description, type } = req.body

            let today = new Date().toLocaleDateString()

            const token: string = req.headers.authorization as string

            const tokenData: authenticationData = getTokenData(token)

            const id: string = generateId()


            if (
                !photo ||
                !description ||
                !type
            ) {
                throw new Error('Preencha os campos "photo", "description" e "type"')
            }

/*             if(   !(type in POST_TYPES)   ){
                res.statusCode = 422
                throw new Error("'type' deve ser 'NORMAL' ou 'EVENT'")
              } */


            await insertPost({
                id,
                photo,
                description,
                type,
                createdAt: today,
                authorId: tokenData.id
            })

            res.status(201).send({ message, id, photo, description, type })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })

        }
    }


}
