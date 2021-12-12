import { insertPost } from "../data/post/insertPost"
import { getTokenData } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { authenticationData } from "../type/user"
import { Request, Response } from "express"
import { createPostBusiness } from "../business/createPostBusiness"
import { POST_TYPES } from "../type/post"
import { getPostBusiness } from "../business/getPostBusiness"
import { findPost } from "../data/post/findPost"

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
    getPostById = async (
        req: Request,
        res: Response
    ) => {
        try {
        
            const { id } = req.params
        
            const result = await findPost(id)
         
            if (!result) {
               throw new Error("Tarefa não encontrada")
            } 
         
          const post = {
             id: result[0].id,
             photo: result[0].photo,
             description: result[0].description,
             type: result[0].type,
             createdAt: result[0].created_at,
             authorId: result[0].author_id,
          }
         
            res.status(200).send(post)
        
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}
