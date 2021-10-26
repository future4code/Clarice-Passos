export class Purchase {
    
    constructor(
        productId: string,
        userId: string,
        quantity: number,
        total: number

    ) {
        if(typeof productId !=="string") throw new Error ('veja se o parametro está correto')
        if(typeof userId !=="string") throw new Error ('veja se o parametro está correto')
        if(typeof quantity !=="number") throw new Error ('veja se o parametro está correto')
        if(typeof total !=="number") throw new Error ('veja se o parametro está correto')

    }
}