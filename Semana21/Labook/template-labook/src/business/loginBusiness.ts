import { selectUserByEmail } from "../data/user/findUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { user } from "../type/user"


type LoginInput = {
   email: any
   password: any
}

export const loginBusiness = async (input: LoginInput): Promise<string> => {
   const { email, password } = input

   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id
       })

   return token
}