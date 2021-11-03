import { app } from './app'
import getAllPokemons from './endpoints/getAllPokemons'

//app.post('/pokemon/post', createPokemon)
app.get ('/pokemon', getAllPokemons)
//app.get('/pokemon/:id', getPokemonByID)

