import * as DataLogic from "../DataLogic"

export interface IDataLogicFactory {
  getInstance() : IDataLogicFactory;
  getUserDataLogic() : DataLogic.IUserDataLogic;

}
  

