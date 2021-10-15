import { connection } from './connection';


export default async function selectProduct(
   
):Promise<any>{
   const result = await connection('Product')
    .select('*')
    return result
}