import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import e from 'express'

const app = express()
app.use(express.json())
app.use(cors())

type user = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: user[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.ADMIN,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.ADMIN,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

app.get("/users", (req: Request, res: Response) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in UserType) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }

      throw new Error("Invalid type")
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return res.status(204).send("No user was found")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})


app.get('/users', (req: Request, res: Response)=>{
  let errorCode: number = 400
  try{
      const name: string = req.query.name as string
      const user: user | undefined = users.find((user)=>user.name === name)
      if(!user){
        errorCode = 404
        throw new Error('User not found')
      } 
      res.status(200).send(user)
  } catch(error: any){
       res.status(errorCode).send({message: error.message}) 
  }
})

app.get('/users/:id', (req: Request, res:Response)=>{
  let errorCode = 400
  try{
      const id: number = Number(req.params.id)
      if(isNaN(id)){
        errorCode = 422
        throw new Error('Valor inválido')
      }

      const user = users.find((user) =>{
        return user.id === id
      })

      if (!user){
        errorCode = 404
        throw new Error('User not found')
      }

      res.status(200).send(user)

  }catch(error: any){
    res.status(errorCode).send({message: error.message})
  }
})

app.post('/users', (req: Request, res:Response)=>{
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
})

app.put('/users', (req: Request, res:Response)=>{
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
})


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
