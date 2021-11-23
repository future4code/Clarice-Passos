import { Pokemon } from "../entities/Pokemon"
import { connection } from "./connections"

export const findPokemon = async (
    name: string,
    type1: string
): Promise<void> => {
    const result: any = await connection("pokemon2")
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type1", "LIKE", `%${type1}%`)
    return result

}

