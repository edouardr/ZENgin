import * as Core from "../_core"
import * as Systems from "../_systems"
import * as Components from "../_components"
import { Messaging } from "../_utils"


/**
 * 
 * 
 * @export
 * @interface IInputController
 * @extends {Systems.ISystem}
 */
export interface IInputController extends Systems.ISystem {

}

/**
 * 
 * 
 * @export
 * @class InputController
 * @implements {IInputController}
 */
export class InputController implements IInputController {

    /**
     * Creates an instance of InputController.
     * It is good practice to have an init func.
     */
    constructor() {
        this.init();
    }

    /**
     * Loops through all GO and get components that are related to input
     * 
     * @param {number} dt - delta time
     * @param {Core.GameObject[]} objects - all GO
     */
    update(dt: number, objects: Core.GameObject[]) {
        let comp: Components.IComponent;
        let go: Core.GameObject;
        for(let i = 0; i < objects.length; ++i){
            go = objects[i];
            comp = go.getComponent(Components.COMPONENTS_TYPE.KEYBOARD);

            // Todo something with the component
        }

        return;
    }

    /**
     * 
     */
    init() {
        return;
    }

    /**
     * 
     * 
     * @param {Common.IMessage} msg
     */
    sendMessage(msg: Messaging.IMessage) {
        return;
    }
}
