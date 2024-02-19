import { User } from "../../users/models";

export interface ClassRoom {
    id:number,
    teacher: User,
    students: User[]
}
