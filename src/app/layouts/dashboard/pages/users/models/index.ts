export interface User{
    id:number,
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