import * as BusinessLogic from "../BusinessLogic"

export interface IBusinessLogicFactory {
  getInstance() : IBusinessLogicFactory;
  getUserBusinessLogic() : BusinessLogic.IUserBusinessLogic;

}
  

