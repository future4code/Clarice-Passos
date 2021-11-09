import { Request, Response } from 'express';
import { Pokemon } from '../entities/Pokemon';
import { connection } from "../data/connections"
import { app } from '../app'
import { findPokemon } from '../data/findPokemon';
import { stringify } from 'uuid';
import { getPokemonsBusiness } from '../business/getPokemonsBusiness';


export default async function getAllPokemons(
    req: Request,
    res: Response

){  try {
     const row = Number(req.query.row)
    const name = req.query.name || "%"
    const type1 = req.query.type || "%"

    let result = await getPokemonsBusiness (row, name as string, type1 as string)


    res.send(result)
  } catch (error: any) {
    res
    .status(500)
    .send(error)
  }
}