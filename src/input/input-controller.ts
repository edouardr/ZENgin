import * as Core from "../_core"
import * as Systems from "../_systems"
import * as Components from "../_components"
import { Messaging } from "../_utils"

export class InputController implements Systems.ISystem {

    constructor() {
        this.init();
    }

    /**
     * Loops through all Game Objects and get components that are related to input
     * 
     * @param {number} dt - delta time
     * @param {Core.GameObject[]} objects - all game objects
     */
    update(dt: number, objects: Core.GameObject[]): void {
        let comp: Components.IComponent;
        let go: Core.GameObject;
        for(let i = 0; i < objects.length; ++i){
            go = objects[i];
            comp = go.getComponent(Components.COMPONENTS_TYPE.KEYBOARD);

            // Todo something with the component
        }

        return;
    }

    init(): void {
        return;
    }

    sendMessage(msg: Messaging.IMessage): void {
        return;
    }
}
