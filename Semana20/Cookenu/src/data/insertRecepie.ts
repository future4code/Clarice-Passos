import { recepie } from "../entities/Class"
import { connection } from "./connections"

export default async function insertRecepie(recepie: recepie) {
    await connection
        .insert(
            {
                recepie
            }
        )
        .into('receita')
}