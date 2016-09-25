import * as Core from "../_core"

/**
 * Defines a System
 * 
 * @export
 * @interface ISystem
 */
export interface ISystem {

    /**
     * Fires at each game loop
     * 
     * @param {number} dt - delta time
     */
    update(dt: number, objects: Core.GameObject[]): void;  

    /**
     * Needs to be called in constructor. 
     * Separates the construction and initialization code.
     */
    init(): void;
    
    /**
     * recieves any messages sent to the core engine
     * 
     * @param {*} message - message to be sent
     */
    sendMessage(message: any): void;
}