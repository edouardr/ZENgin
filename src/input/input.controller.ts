import * as Systems from "../_systems"
import { Common } from "../_utils"


export interface IInputController extends Systems.ISystem {

}

export class InputController implements IInputController {
    constructor() {
        this.init();
    }

    update(dt: number) {

    }

    init() {

    }

    sendMessage(msg: Common.IMessage) {

    }
}
