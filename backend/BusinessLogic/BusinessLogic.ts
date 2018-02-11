/**
 * Author:      Midas van Oene
 * Site:        https://nehm.apps.midasvo.nl
 * Filename:    BusinessLogic.ts
 * Description: This class is used to export all relevant classes in the module. The classes can be used by importing this file.
 */

/**
 * Export interface classes
 */

// Factory interface
export { IBusinessLogicFactory } from "../BusinessLogic/Interfaces/IBusinessLogicFactory";

// Logic interfaces
export { IUserBusinessLogic } from "../BusinessLogic/Interfaces/IUserBusinessLogic";

/**
 * Export concrete classes
 */

// Factory concrete class
export { BusinessLogicFactory } from "../BusinessLogic/Implementations/BusinessLogicFactory";

// Logic concrete classes
export { UserBusinessLogic } from "../BusinessLogic/Implementations/UserBusinessLogic";
