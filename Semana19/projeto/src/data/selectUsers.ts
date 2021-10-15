import { connection } from './connection';


export default async function selectUsers(
   
):Promise<any>{
   const result = await connection('User')
    .select('*')
    return result[0]
}