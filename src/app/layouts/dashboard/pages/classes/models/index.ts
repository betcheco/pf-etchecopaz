import { User } from "../../users/models";

export interface Class {
    id:number,
    teacher: number,
    students: User[]
}
