import { connection } from './connection';
import { Product } from '../class/Product';


export default async function insertProduct(
  product: Product
) {
    await connection
            .insert(product)
            .into('Product')
}