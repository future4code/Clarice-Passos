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

    app.post("/countries/:id", (req: Request, res: Response) => {
        let errorCode: number = 400;
        //inicio de um sonho
        try {
          const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
          );
      
          if (countryIndex === -1) {
            errorCode = 404;
            throw new Error();
          }
      
          if (!req.body.name && !req.body.capital) {
            throw new Error("Invalid Parameters");
          }
      
          if (req.body.name) {
            countries[countryIndex].name = req.body.name;
          }
          if (req.query.capital) {
            countries[countryIndex].capital = req.body.capital;
          }
      
          //deu tudo certo
          res.status(200).send("Country successfully updated");
        } catch (error) {
          //deu tudo errado
          console.log(error);
          res.status(errorCode).send(error.message);
        }
      });

app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})
