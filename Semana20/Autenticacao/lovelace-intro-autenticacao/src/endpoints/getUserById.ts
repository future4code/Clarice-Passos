import { Request, Response } from "express";
import { connection } from "../data/connection";

export const gerUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

const  async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from('User')
      .where({ id });

    return result[0];
  }

function getData(token: string) {
    throw new Error("Function not implemented.");
}
