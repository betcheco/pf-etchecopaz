export interface User{
    id:number | null,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    role:Role | null
}


export enum Role{
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    TEACHER = "TEACHER"
}