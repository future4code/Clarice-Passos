import { connection } from "../connection"

export const findPost = async (
   id: string
): Promise<any> => {
   const result = await connection("labook_posts")
   .select("*")
   .where({ id })

   return result
}