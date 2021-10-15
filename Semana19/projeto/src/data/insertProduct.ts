import { connection } from './connection';
import { Product } from '../class/Product';


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