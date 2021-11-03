import { connection } from "./connections"
import PokemonGo from "./PokemonGo.json"

/* const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

console.log(PokemonGo)

const insertPokemons = ()=>connection("pokemon2")
.insert(PokemonGo)
.then(()=>{console.log("Pokemons Inseridos")})
.catch(printError)


const closeConnection = () =>{
    connection.destroy()
}
insertPokemons()
.then(closeConnection)
 */
 const main = async() =>{
    try{
    await connection("pokemon2").insert(PokemonGo)
    }catch (error){
        console.log(error)
    }finally{
        connection.destroy()
    }
} 

main()