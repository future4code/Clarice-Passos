import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { countries } from "./data"
import { country } from "./types";

const app: Express = express()
app.use(express.json());
app.use(cors());


/* app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
        .status(200)
        .send(result)
    return result    
})

const server = app.listen(3003, () => console.log(countries)) */

 app.get('/countries/:id', (req: Request, res: Response) => {
    const result = countries.find(country => {
        return Number(country.id) === Number(req.params.id)
    })
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})
 
app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries
    if (req.query.name) {
        res.status(200).send(result)
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }

    if (req.query.capital) {
        res.status(200).send(result)
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }

    if (req.query.continent) {
        res.status(200).send(result)
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    }
    else {
        res.status(404).send("Not found")
    }
})

app.put('/countries/:id',  (req: Request, res: Response) => {
    const result = {name: "",capital: ""} 
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})


app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})
