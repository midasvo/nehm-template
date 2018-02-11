"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessLogic = require("../BusinessLogic");
class BusinessLogicFactory {
    constructor() { }
    getInstance() {
        this._businessLogicFactory = this._businessLogicFactory || new BusinessLogicFactory();
        return this._businessLogicFactory;
    }
    getUserBusinessLogic() {
        this._userBusinessLogic = this._userBusinessLogic || new BusinessLogic.UserBusinessLogic();
        return this._userBusinessLogic;
    }
}
exports.BusinessLogicFactory = BusinessLogicFactory;
//# sourceMappingURL=BusinessLogicFactory.js.map