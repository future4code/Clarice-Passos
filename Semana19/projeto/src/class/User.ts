export class User {

   constructor(
      name: string,
      email: string,
      age: number,
      id: string
   ) {
      if(typeof name !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof email !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof age !=="number") throw new Error ('veja se o parametro está correto')
      if(typeof id !=="string") throw new Error ('veja se o parametro está correto')
   }
}