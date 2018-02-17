import * as interfaces from "../Entities"
import * as Entities from "../Entities";
export class User extends Entities.RootEntity implements interfaces.IUser {
    UserGUID: String;
    Username: String;
}

