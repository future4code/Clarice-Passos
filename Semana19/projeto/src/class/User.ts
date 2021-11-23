export class User {
   name: string;
   email: string;
   age: number;
   id: string

   constructor(
      name: string,
      email: string,
      age: number,
      id: string
   ) {
      this.name = name,
      this.email = email,
      this.age = age,
      this.id = id
     /*  if(typeof name !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof email !=="string") throw new Error ('veja se o parametro está correto')
      if(typeof age !=="number") throw new Error ('veja se o parametro está correto')
      if(typeof id !=="string") throw new Error ('veja se o parametro está correto') */
   }
}