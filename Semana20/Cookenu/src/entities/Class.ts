export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(id: string, name: string, email: string, password: string, role: USER_ROLES){}

    static toUserModel(data:any): User{
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}



export class Recepie{
    constructor(tile: string, description: string, criationDate: string){}
}