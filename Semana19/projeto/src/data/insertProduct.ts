import { connection } from './connection';
import { User } from '../class/User';


export default async function insertProduct(
    id: string,
    name: string,
    description: number,
    price: number

) {
    await connection.insert(
        {
            id,
            name,
            description,
            price
        }
    ).into('Product')
}