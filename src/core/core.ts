/// <reference path="./components.ts" />
/// <reference path="../common/common.ts" />

namespace Core {
    export interface IGameObject {
        position: Common.Vector
        components: Array<Components.IComponent>,
        getComponent(id: string): Components.IComponent,
        hasComponent(id: string): boolean,
        addComponent(component: any): void
    }

    export class GameObject implements IGameObject {
        position: Common.Vector
        components: Array<Components.IComponent>

        constructor(canvas: HTMLCanvasElement){

        }

        getComponent(id: string): Components.IComponent {
            return null;
        }

        hasComponent(id: string): boolean {
            return this.getComponent(id) !== null;
        }

        addComponent(component: Components.IComponent): void {
            this.components.push(component);
        }
    }
}