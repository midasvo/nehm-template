import * as BusinessLogic from "../BusinessLogic"

export class BusinessLogicFactory implements BusinessLogic.IBusinessLogicFactory {
    constructor(){}

    private _businessLogicFactory: BusinessLogic.IBusinessLogicFactory;
    getInstance(): BusinessLogic.IBusinessLogicFactory {
        this._businessLogicFactory = this._businessLogicFactory || new BusinessLogicFactory();
        return this._businessLogicFactory;
    }

    private _userBusinessLogic : BusinessLogic.IUserBusinessLogic;
    getUserBusinessLogic(): BusinessLogic.IUserBusinessLogic {
        this._userBusinessLogic = this._userBusinessLogic || new BusinessLogic.UserBusinessLogic();
        return this._userBusinessLogic;
    }
}

