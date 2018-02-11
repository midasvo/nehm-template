import * as DataLogic from "../DataLogic"
import * as entities from "../../Entities/entities"

export interface IUserDataLogic {
    getUsers(): Array<entities.IUser>;
}


