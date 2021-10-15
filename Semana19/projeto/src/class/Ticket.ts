import { Product } from "./Product";

export class Ticket extends Product {

    constructor(
        name: string,
        description: string,
        price: number,
        id: string,
        origin: string,
        destiny: string
    ) {
        super(name, description, price, id);
        if(typeof origin !=="string") throw new Error ('veja se o parametro está correto')
        if(typeof destiny !=="string") throw new Error ('veja se o parametro está correto')
    }
}