import * as DataLogic from "../DataLogic"

export class DataLogicFactory implements DataLogic.IDataLogicFactory {
    constructor(){}

    private _dataLogicFactory: DataLogic.IDataLogicFactory;
    getInstance(): DataLogic.IDataLogicFactory {
        this._dataLogicFactory = this._dataLogicFactory || new DataLogicFactory();
        return this._dataLogicFactory;
    }

    private _userDataLogic : DataLogic.IUserDataLogic;
    getUserDataLogic(): DataLogic.IUserDataLogic {
        this._userDataLogic = this._userDataLogic || new DataLogic.UserDataLogic();
        return this._userDataLogic;
    }
}

