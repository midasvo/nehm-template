import * as Entities from "../../Entities/Entities"

export interface IUserBusinessLogic {

    /**
     * Returns all User objects from the database.
     */
    getUsers(): Array<Entities.IUser>;

    /**
     * Creates and saves a new User.
     * @param newUserObject The Entity User object transformed from the model. Contains the minimum amount of information in order to create and save the new User object to the database.
     */
    createUser(newUserObject: Entities.IUser): Entities.IUser;
}


