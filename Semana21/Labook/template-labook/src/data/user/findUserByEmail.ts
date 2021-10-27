import { user } from "../../type/user"
import { connection } from "../connection"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result = await connection("labook_users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password
      }

   } catch (error: any) {
      console.log(error.slqMessage || error.message)
      throw new Error("Erro ao buscar usuário")
   }
}