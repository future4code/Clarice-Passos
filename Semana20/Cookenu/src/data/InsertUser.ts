import { User, USER_ROLES } from "../entities/Class"
import { connection } from "./connections"

export default async function insertUser(
    user: User
) {
    await connection

        .insert(
            {
                user
            }
        ).into('usuario')
}