import { User } from "../../users/models";

export interface Classes{
    id:number,
    teacher: User,
    students: User[]
}
