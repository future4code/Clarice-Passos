import { connection } from "./connections"

export const findPokemonByRow = async (row: number): Promise<void> => {
  const [result] = await connection("pokemon2")
    .where({ row })

  return result
}