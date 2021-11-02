import { connection } from "./connections"
import PokemonGo from "../PokemonGo.json"

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}


const insertPokemons = ()=>connection("pokemon2")
.insert(PokemonGo)
.then(()=>{console.log("Pokemons Inseridos")})
.catch(printError)


const closeConnection = () =>{
    connection.destroy()
}
insertPokemons()
.then(closeConnection)

