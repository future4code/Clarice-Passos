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

const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
   await connection ("TodoListUser").update({
      name: name,
      nickname: nickname
   }).where({id:id})
}

const insertTask = async (
   id: number,
   title: string,
   description: string,
   limit_date: Date,
   creator_user_id: number

): Promise<void> => {
   await connection
      .insert({
         id,
         title,
         description,
         limit_date,
         creator_user_id
      })
      .into("TodoListTask");
};

app.post("/user", async (req: Request, res: Response) => {
   let errorCode: number = 400;

   try {
      const { name, nickname, email } = req.body
      if (!name || !nickname || !email) {
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
   let errorCode: number = 400;

   try {
      const id = req.params.id;
      const user = await getUserById(id);
      if (!user) {
         res.status(404).send({
            message: "user not found"
         })
      }
      res.status(200).send({
         message: "Sucesso!",
         id: user.id,
         nickname: user.nickname
      })
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
      const { name, nickname} = req.body
      if (name === "" || nickname === "" ) {
         errorCode = 422;
         throw new Error("Please check the fields!")
      }
      await updateUser(req.params.id, req.body.name, req.body.nickname);
      res.status(200).send({
         message: "Success",
      });
   } catch (err: any) {
      res.status(400).send({
         message: err.message,
      });
   }
});


app.post("/task", async (req: Request, res: Response) => {
   let errorCode: number = 400;

   try {
      const { title, description, limit_date, creator_user_id } = req.body
      if (!title || !description || !limit_date || !creator_user_id) {
         errorCode = 422;
         throw new Error("Please check the fields!")
      }

      const id = Number(Date.now().toString(10).substr(2, 4)) + Number(Math.random().toString(10).substr(2, 4));
      Math.floor(id / 10000)
      await insertTask(id, title, description, limit_date, creator_user_id)
      res.status(201).send({ message: "Task created successfully!" });
   } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage })
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});