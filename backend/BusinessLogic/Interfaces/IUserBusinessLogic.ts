import * as Entities from "../../Entities/Entities"

export interface IUserBusinessLogic {
    getUsers(): Array<Entities.IUser>;
}


