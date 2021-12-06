import { app } from './app'
import { PostController } from './controller/PostControlles'
import { UserController } from "./controller/UserController"

const userController = new UserController()

const postController = new PostController()


app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)


app.post('/post/create', postController.createPost)
app.get('/post/:id', postController.getPostById)


