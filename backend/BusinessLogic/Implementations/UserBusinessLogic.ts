import * as BusinessLogic from "../BusinessLogic";
import * as Entities from "../../Entities/entities";

export class UserBusinessLogic implements BusinessLogic.IUserBusinessLogic {
    getUsers(): Entities.IUser[] {
        throw new Error("Method not implemented.");
    }
}   