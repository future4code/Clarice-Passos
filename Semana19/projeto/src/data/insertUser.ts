import { connection } from './connection';
import { User } from '../class/User';



export default async function insertUser(
    name: string,
    email: string,
    age: number,
    id: string

) {
    await connection.insert(
        {
            name,
            email,
            age,
            id
        }
    ).into('User')
}