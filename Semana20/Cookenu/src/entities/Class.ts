export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
  }
  
  export interface authenticationData {
    id: string
    role: USER_ROLES
  }
  
  export interface user extends authenticationData {
    email: string
    name: string
    password: string
  }

  export interface userInfo {
    id: string
    email: string
    role: USER_ROLES
  } 