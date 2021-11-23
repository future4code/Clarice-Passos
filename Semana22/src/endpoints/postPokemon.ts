import { Request, Response } from 'express';
import { Pokemon } from '../entities/Pokemon';
import { connection } from "../data/connections"
import { app } from '../app'

export default async function postPokemon(
  req: Request,
  res: Response

) {
  try {
    const { Row, Name, Pokedex_Number, Type1 } = req.body

    // sem instanciar classes:

    // const product = {name, tags}
    // await connection("amaro_products").insert(product)

    // instanciando classes:

    const pokemon = new Pokemon(Row, Name, Pokedex_Number, Type1)

    await connection('pokemon2')
      .insert(pokemon)

    res.status(201).send({
      message: "Pokemon adicionado",
      pokemon
    })
  } catch (error) {
    res.status(500).send("Erro")
  }
}