import { app } from './app'
import getAllPokemons from './endpoints/getAllPokemons'
import postPokemon from './endpoints/postPokemon'

app.post('/pokemon', postPokemon)
app.get ('/pokemon', getAllPokemons)
//app.get('/pokemon/:id', getPokemonByID)

