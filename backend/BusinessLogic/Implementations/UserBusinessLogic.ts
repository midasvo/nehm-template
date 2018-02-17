import * as BusinessLogic from "../BusinessLogic";
import * as Entities from "../../Entities/Entities";
var Executor = require("../../Helpers/Executor");

export class UserBusinessLogic implements BusinessLogic.IUserBusinessLogic {
    createUser(newUserObject: Entities.IUser): Entities.IUser {
        return new Executor(() => {
            console.log("Creating a new User");
        });
    }
    getUsers(): Entities.IUser[] {
        throw new Error("Method not implemented.");
    }
}   
