
import { Messaging } from "../_utils"

export const enum COMPONENT_TYPES {
    KEYBOARD,
    COLLIDER,
    DEFAULT
}


export interface IComponent {

    sendMessage(msg: Messaging.IMessage): void

    update(dt: number ): void
    
    init(): void
    
    shutDown(): void
    
    isActive(): boolean
}

export abstract class Component implements IComponent {

    protected _active: boolean
    protected _type: COMPONENT_TYPES 
    protected _handle: any 

    abstract sendMessage(msg: Messaging.IMessage): void

    abstract update(dt: number ): void
    
    abstract init(): void

    abstract shutDown(): void

    abstract isActive(): boolean
}
