import * as Components from "../_components"
import { Common, Math, Messaging, Collections } from "../_utils"
import { ICreator } from "../objectFactory/creator"

export interface IGameObject {

    position: Math.Vector
    components: Collections.HashMap<Components.IComponent>

    update(dt: number): void

    sendMessage(msg: Messaging.IMessage): void

    getComponent(id: Components.COMPONENT_TYPES): Components.IComponent
    
    hasComponent(id: Components.COMPONENT_TYPES): boolean

    addComponent(id: Components.COMPONENT_TYPES, component: Components.IComponent): void
}

export class GameObject implements IGameObject {
    position: Math.Vector
    components: Collections.HashMap<Components.IComponent>

    constructor(canvas: HTMLCanvasElement) {
        this.components = new Collections.HashMap<Components.IComponent>();
        this.position = new Math.Vector();
    }

    public update(dt: number){
    
    }

    public sendMessage(msg: Messaging.IMessage){
    
    }

    public getComponent(id: Components.COMPONENT_TYPES): Components.IComponent {
        return this.components.get(id.toString());
    }

    public hasComponent(id: Components.COMPONENT_TYPES): boolean {
        return this.components.containsKey(id.toString());
    }

    public addComponent(id: Components.COMPONENT_TYPES, component: Components.IComponent): void {
        this.components.add(id.toString(), component);
        return;
    }
}

export class GameObjectCreator implements ICreator {
    public create(properties: PropertyDescriptorMap): GameObject {
        return new GameObject(properties["canvas"] as HTMLCanvasElement);
    }
}