import { insertUser } from "../data/user/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (input: any) => {
   const { name, email, password } = input

   if (
      !name ||
      !email ||
      !password 
   ) {
      throw new Error('Preencha os campos "name", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword = await hash(password);

   await insertUser({
      id,
      name,
      email,
      password: cypherPassword
    
   })

   const token: string = generateToken({
      id
   })

   return token
}