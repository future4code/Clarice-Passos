import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
   }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


const insertUser = async (
   id: number,
   name: string,
   nickname: string,
   email: string

): Promise<void> => {
   await connection
      .insert({
         id,
         name,
         nickname,
         email
      })
      .into("TodoListUser");
};

const getUserById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM TodoListUser WHERE id = '${id}'
   `)
 
    return result[0][0]
 }

app.post("/user", async (req: Request, res: Response) => {
   let errorCode: number = 400;

   try {
      const {name, nickname, email} = req.body
       if(!name || !nickname || !email){
         errorCode = 422;
         throw new Error("Please check the fields!")
       }

      const id = Number(Date.now().toString(10).substr(2, 4)) + Number(Math.random().toString(10).substr(2, 4));
      Math.floor(id / 10000)
      await insertUser(id, name, nickname, email)
      res.status(201).send({ message: "User created successfully!" });
      } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage })
   }
})


app.get("/user/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id;
     const user = await getUserById(id);
 
     res.status(200).send(user)
   } catch (err: any) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

 

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});