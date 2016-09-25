
import { Messaging } from "../_utils"

/**
 * 
 * 
 * @export
 * @enum {number}
 */
export const enum COMPONENTS_TYPE {
    KEYBOARD,
    COLLIDER
}

/**
 * 
 * 
 * @export
 * @interface IComponent
 */
export interface IComponent {

    /**
     * 
     * 
     * @param {Common.IMessage} msg
     */
    sendMessage(msg: Messaging.IMessage): void

    /**
     * 
     * 
     * @param {number} dt
     */
    update(dt: number ): void
    
    /**
     * 
     */
    init(): void
    
    /**
     * 
     */
    shutDown(): void
    
    /**
     * 
     * 
     * @returns {boolean}
     */
    isActive(): boolean
}


/**
 * 
 * 
 * @export
 * @abstract
 * @class Component
 * @implements {IComponent}
 */
export abstract class Component implements IComponent {

    /**
     * 
     * 
     * @private
     * @type {boolean}
     */
    protected _active: boolean
    
    /**
     * ComponentId
     * 
     * @private
     * @type {*}
     */
    protected _componentId: COMPONENTS_TYPE 
    
    /**
     * GameObjectHandle
     * 
     * @private
     * @type {*}
     */
    protected _handle: any 

    /**
     * 
     * 
     * @abstract
     * @param {Common.IMessage} msg
     */
    abstract sendMessage(msg: Messaging.IMessage): void

    /**
     * 
     * 
     * @abstract
     * @param {number} dt
     */
    abstract update(dt: number ): void
    
    /**
     * 
     * 
     * @abstract
     */
    abstract init(): void
    
    /**
     * 
     * 
     * @abstract
     */
    abstract shutDown(): void
    
    /**
     * 
     * 
     * @abstract
     * @returns {boolean}
     */
    abstract isActive(): boolean
}
