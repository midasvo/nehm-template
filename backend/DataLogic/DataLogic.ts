/**
 * Author:      Midas van Oene
 * Site:        https://nehm.apps.midasvo.nl
 * Filename:    DataLogic.ts
 * Description: This class is used to export all relevant classes in the module. The classes can be used by importing this file.
 */

/**
 * Export interface classes
 */

export { IDataLogicFactory } from "../DataLogic/Interfaces/IDataLogicFactory";
export { IUserDataLogic } from "../DataLogic/Interfaces/IUserDataLogic";

/**
 * Export concrete classes
 */
export { DataLogicFactory } from "../DataLogic/Implementations/DataLogicFactory";
export { UserDataLogic } from "../DataLogic/Implementations/UserDataLogic";
