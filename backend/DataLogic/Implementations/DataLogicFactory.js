"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLogic = require("../DataLogic");
class DataLogicFactory {
    constructor() { }
    getInstance() {
        this._dataLogicFactory = this._dataLogicFactory || new DataLogicFactory();
        return this._dataLogicFactory;
    }
    getUserDataLogic() {
        this._userDataLogic = this._userDataLogic || new DataLogic.UserDataLogic();
        return this._userDataLogic;
    }
}
exports.DataLogicFactory = DataLogicFactory;
//# sourceMappingURL=DataLogicFactory.js.map