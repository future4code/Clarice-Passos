import { Request, Response } from 'express';
import { Pokemon } from '../entities/Pokemon';
import { connection } from "../data/connections"
import { app } from '../app'


export default async function getAllPokemons(
    req: Request,
    res: Response

){  try {
    const row = Number(req.query.row)
    const name = req.query.name || "%"
    const type1 = req.query.type || "%"

    let result

    if (row) {
      result = await connection("pokemon2")
        .where({ row })
    } else {
      result = await connection("pokemon2")
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type1", "LIKE", `%${type1}%`)
    }
    res.send(result)
  } catch (error: any) {
    res
    .status(500)
    .send(error)
  }
}