import express, { Express,Response, Request } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

type user = {
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement: transation[]
}

type transation = {
    value: number,
    date: Date,
    description: string
}

let arrayUsers: user[] = [
]

app.post("/users", (req: Request, res: Response) => {
    try {
      const { name, cpf, dateOfBirthString} = req.body

      const [day, month, year] = dateOfBirthString.split("/")

      const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
    
      const age: number = Date.now() - dateOfBirth.getTime()

      const ageInYears: number = age / 1000 / 60 / 60 / 24 / 365

      if (ageInYears < 18){
          res.statusCode = 406
          throw new Error ("You must be over 18 to create a account")
      }
      
      arrayUsers.push({
        name,
        cpf,
        dateOfBirth,
        balance: 0,
        statement: []
      })
  
      res.status(201).send({
        message: "user created successfuly",
      })
    } catch (err:any) {
        console.log(err)
      res.status(400).send(err.message)
    }
  })

   app.get("/users", (req: Request, res: Response) => {
    try {
       if(!arrayUsers.length){
           res.statusCode = 404
           throw new Error ("No account found")
       }
      res.status(200).send(arrayUsers)
    } catch (err: any) {
      res.send(err.message)
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