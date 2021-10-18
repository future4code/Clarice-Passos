import app from "./app"
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"

app.post('/user/signup', createUser)
app.post("/users/login", login)
app.get('/user', getUserById)