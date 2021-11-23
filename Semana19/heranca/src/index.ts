import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());
import { AddressInfo } from "net";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public interoduceYourself(): string {
        return `Olá, sou ${this.name}. bom dia`
     }
  }


const clarice: User = new User(
    '01',
    'clarice@gmail.com',
    'clarice',
    '240388'
)

console.log(clarice)


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");

      
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
    
  }

  const clarice2: Customer = new Customer(
      '01',
      'clarice@gmail.com',
      'clarice',
      '240388',
      '0'
      
  )
console.log(clarice2)

const customer = new Customer(
    '01',
      'clarice@gmail.com',
      'clarice',
      '240388',
      '0'
)

console.log(customer.interoduceYourself())

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const clarice3: Client = {
    name:"Clarice",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () =>{
        return 2;
    }
  }

  console.log(clarice3)

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});