import { Collections } from "../_utils"
import { ICreator } from "./creator"
import { ObjectFactory } from "../_systems"
import * as Systems from "../_systems"

/**
 * 
 * 
 * @export
 * @class GameObjectFactory
 * @extends {ObjectFactory}
 * @implements {Systems.ISystem}
 */
export class GameObjectFactory extends ObjectFactory implements Systems.ISystem {

    /**
     * Creates an instance of GameObjectFactory.
     * 
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * 
     * 
     * @param {number} dt
     * @returns
     */
    update(dt: number): void {
        // delete game inactive objects

        return;
    }

    /**
     * 
     * 
     * @returns
     */
    init(): void {
        return;
    }

    /**
     * 
     * 
     * @param {*} message
     * @returns
     */
    sendMessage(message: any): void {
        return;
    }
}