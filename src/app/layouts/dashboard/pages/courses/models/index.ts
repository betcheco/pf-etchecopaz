import { Classes } from "../../classes/models";
import { User } from "../../users/models";

export interface Course{
    id:number,
    name:string,
    classes: Classes[]
}
