import * as DataLogic from "../DataLogic"
import * as entities from "../../Entities/Entities"

export interface IUserDataLogic {
    getUsers(): Array<entities.IUser>;
}


