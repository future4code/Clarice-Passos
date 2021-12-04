import { connection } from "./connections"


export default async function findUserById(id: string): Promise<any> {
  const [result] = await connection('usuario')
  .where({id})
return [result.id, result.name, result.email]
}
