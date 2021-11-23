import { findPokemon } from "../data/findPokemon"
import { findPokemonByRow } from "../data/findPokemonById"

export const getPokemonsBusiness = async (
  row: number,
  name: string,
  type1: string
) => {

  let result

  if (row) {
    // busca produtos por id
    result = await findPokemonByRow(row)
  } else {
    // busca produtos com filtros
    result = await findPokemon(name, type1)
  }

  return result
}