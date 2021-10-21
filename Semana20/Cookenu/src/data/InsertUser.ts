import { user, USER_ROLES } from "../entities/Class"
import { connection } from "./connections"

export default async function insertUser(
    user: user
) {
    await connection

        .insert(
            {
                user
            }
        ).into('usuario')
}