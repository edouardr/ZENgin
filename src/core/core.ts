import * as Components from "../_components"
import { Common } from "../_utils"
import { ICreator } from "../objectFactory/creator"

export interface IGameObject {
    position: Common.Vector
    components: Array<Components.IComponent>,
    getComponent: (id: string) => Components.IComponent,
    hasComponent: (id: string) => boolean,
    addComponent: (component: any) => void
}

export class GameObject implements IGameObject {
    position: Common.Vector
    components: Array<Components.IComponent>

    constructor(canvas: HTMLCanvasElement) {

    }

    getComponent(id: string): Components.IComponent {
        // TODO: add logic here
        return null;
    }

    hasComponent(id: string): boolean {
        return this.getComponent(id) !== null;
    }

    addComponent(component: Components.IComponent): void {
        this.components.push(component);
        return;
    }
}

export class Entity extends Object {
    public func(x: number): number { return x * x; }

    equals(otherObject: Entity): boolean {
        return this.func(5) === otherObject.func(5);
    }
}

export class EntityCreator implements ICreator {
    create(): Entity {
        return new Entity();
    }
}