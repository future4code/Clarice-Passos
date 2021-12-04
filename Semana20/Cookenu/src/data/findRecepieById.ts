import { connection } from "./connections"


export default async function findRecepieById(id: string): Promise<any> {
  const [result] = await connection('receita')
  .where({id})
return [result]
}