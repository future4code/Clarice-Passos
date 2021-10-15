export class Product {

   constructor(
      name: string,
      description: string,
      price: number,
      id: string
   ) {
      if(typeof name !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof description !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof price !=="number") throw new Error ('veja se o parametro está correto')
      if(typeof id !=="string") throw new Error ('veja se o parametro está correto')

   }
}