import { user, USER_ROLES } from "../entities/Class"
import { connection } from "./connections"

export const GetUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from('usuario')
      .where({ email });
 
    return result[0];
   }
 