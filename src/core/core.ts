import * as Components from "../_components"
import { Common, Math, Messaging } from "../_utils"
import { ICreator } from "../objectFactory/creator"

export interface IGameObject {
    /**
     * 
     * 
     * @type {Math.Vector}
     * @memberOf IGameObject
     */
    position: Math.Vector
    
    /**
     * 
     * 
     * @type {Array<Components.IComponent>}
     * @memberOf IGameObject
     */
    components: Array<Components.IComponent>

    /**
     * 
     * 
     * @param {number} dt
     * 
     * @memberOf IGameObject
     */
    update(dt: number): void
    
    /**
     * 
     * 
     * @param {Messaging.IMessage} msg
     * 
     * @memberOf IGameObject
     */
    sendMessage(msg: Messaging.IMessage): void
    
    /**
     * 
     * 
     * @param {Components.COMPONENTS_TYPE} id
     * @returns {Components.IComponent}
     * 
     * @memberOf IGameObject
     */
    getComponent(id: Components.COMPONENTS_TYPE): Components.IComponent
    
    /**
     * 
     * 
     * @param {Components.COMPONENTS_TYPE} id
     * @returns {boolean}
     * 
     * @memberOf IGameObject
     */
    hasComponent(id: Components.COMPONENTS_TYPE): boolean
    
    /**
     * 
     * 
     * @param {Components.COMPONENTS_TYPE} id
     * @param {Components.IComponent} component
     * 
     * @memberOf IGameObject
     */
    addComponent(id: Components.COMPONENTS_TYPE, component: Components.IComponent): void
}

/**
 * 
 * 
 * @export
 * @class GameObject
 * @implements {IGameObject}
 */
export class GameObject implements IGameObject {
    position: Math.Vector
    components: Array<Components.IComponent>

    /**
     * Creates an instance of GameObject.
     * 
     * @param {HTMLCanvasElement} canvas
     * 
     * @memberOf GameObject
     */
    constructor(canvas: HTMLCanvasElement) {
        this.components = new Array();
        this.position = new Math.Vector();
    }

    update(dt: number){
    
    }

    sendMessage(msg: Messaging.IMessage){
    
    }

    getComponent(id: Components.COMPONENTS_TYPE): Components.IComponent {
        // TODO: add logic here
        return null;
    }

    hasComponent(id: Components.COMPONENTS_TYPE): boolean {
        return this.getComponent(id) !== null;
    }

    addComponent(id: Components.COMPONENTS_TYPE, component: Components.IComponent): void {
        this.components.push(component);
        return;
    }
}

/**
 * 
 * 
 * @export
 * @class GameObjectCreator
 * @implements {ICreator}
 */
export class GameObjectCreator implements ICreator {
    
    /**
     * 
     * 
     * @param {PropertyDescriptorMap} properties
     * @returns {GameObject}
     * 
     * @memberOf GameObjectCreator
     */
    create(properties: PropertyDescriptorMap): GameObject {
        return new GameObject(properties["canvas"] as HTMLCanvasElement);
    }
}