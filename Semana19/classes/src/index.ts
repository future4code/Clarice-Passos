import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getCpf(): string {
        return this.cpf
    }
  
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransations(): Transaction[]{
        return this.transactions
    }

    public setCpf(
        newCpf : string
    ){
        this.cpf = newCpf
    }

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

//1) a Construtores podem ser usados para suportar a 
//inicialização de valores internos da classe durante a declaração de objetos.

const clarice: UserAccount = new UserAccount(
    "01375257021",
    "clarice",
    33
)

console.log(clarice)

//b- uma vez

//c- utilizando os getters e setters

//2)
//a)

class Transaction  {
    private description: string;
    private value: number;
    private date: string;
    
    public getDescription(): string {
        return this.description
    }

    public getValue():number{
        return this.value
    }

    public getDate():string{
        return this.date
    }



    constructor(description: string, value:number, date:string){
        console.log("Chamando o constructor da classe Transaction")
        this.description = description;
        this.value = value;
        this.date = date;
    }
  }

class Bank {
    private accounts : UserAccount[];
    public getAccounts (): UserAccount[]{
        return this.accounts
    }

    constructor(accounts: UserAccount[]){
        console.log("Chamando o constructor de Bank")
        this.accounts = accounts
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
