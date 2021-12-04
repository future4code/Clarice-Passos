import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import createProduct from './endpoints/createProduct';
import getsUsers from './endpoints/getUsers';
import getProduct from './endpoints/getProducts';
const app: Express = express();

app.use(express.json());
app.use(cors());


app.post('/user', createUser)
app.post('/product', createProduct)
app.get('/user', getsUsers)
app.get('/product', getProduct)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});