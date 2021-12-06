import { insertPost } from "../data/post/insertPost";
import { generateToken, getTokenData } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { POST_TYPES } from "../type/post";
import { authenticationData } from "../type/user";

export const createPostBusiness = async (input: any) => {
   const { photo, description, type } = input

   if (
      !photo ||
      !description ||
      !type 
   ) {
      throw new Error('Preencha os campos "photo", "description" e "type"')
   }


   const id: string = generateId()


   await insertPost({
       id,
       photo,
       description,
       type,
       createdAt: today ,
       authorId: tokenData.id
   })
   
}

