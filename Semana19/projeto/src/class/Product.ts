export class Product {
   name: string;
   description: string;
   price: number;
   id: string

   constructor(
      name: string,
      description: string,
      price: number,
      id: string
   ) {
      this.name = name,
      this.description = description,
      this.price = price,
      this.id = id
   }
}