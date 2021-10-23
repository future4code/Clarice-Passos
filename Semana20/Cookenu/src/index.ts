import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import signup from './endpoints/signup';
import { login } from './endpoints/login';
import { getUserByToken } from './endpoints/getUserByToken';
import getUserById from './endpoints/getUserById';
import postRecepie from './endpoints/postRecepie';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/users/signup', signup)
app.post ('/login', login )
app.get ('/user/profile', getUserByToken)
app.get('/user/:id', getUserById)
app.post ('/recepie', postRecepie)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});