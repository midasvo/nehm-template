import * as Entities from "../../Entities/entities"

export interface IUserBusinessLogic {
    getUsers(): Array<Entities.IUser>;
}


