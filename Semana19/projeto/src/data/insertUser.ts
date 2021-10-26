import { connection } from './connection';
import { User } from '../class/User';



export default async function insertUser(
user:User
) {
    await connection.insert(user).into('User')
}