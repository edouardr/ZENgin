import * as Components from "../_components"
import { Messaging } from "../_utils"
import { ICreator } from "../objectFactory/creator"

export interface IKeyBoard {
    keyState: Array<boolean>,
    isDown: (keyCode: number) => boolean
}

export class KeyBoard extends Components.Component implements IKeyBoard {

    keyState: Array<boolean>

    /**
     * 
     * 
     * @type {HTMLCanvasElement}
     */
    canvas: HTMLCanvasElement

    /**
     * Creates an instance of KeyBoard.
     * 
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas: HTMLCanvasElement) {
        super();
        this.canvas = canvas;
        this.init();
    }

    /**
     * 
     * 
     * @param {number} dt
     * @returns
     */
    update(dt: number) {
        return;
    }

    /**
     * 
     * 
     * @returns
     */
    init() {
        this._active = true;
        var self = this;

        this.canvas.addEventListener("keydown", function (event) {
            self.keyState[event.keyCode] = true;
        });

        this.canvas.addEventListener("keyup", function (event) {
            self.keyState[event.keyCode] = false;
        });
        return;
    }

    /**
     * 
     * 
     * @param {Messaging.IMessage} msg
     * @returns
     */
    sendMessage(msg: Messaging.IMessage) {
        return;
    }

    /**
     * 
     * 
     * @returns
     */
    isActive() {
        return this._active;
    }

    /**
     * 
     * 
     * @returns
     */
    shutDown() {
        return;
    }

    /**
     * 
     * 
     * @param {number} keyCode
     * @returns
     */
    isDown(keyCode: number) {
        return this.keyState[keyCode] === true;
    }
}

/**
 * 
 * 
 * @export
 * @class GameObjectCreator
 * @implements {ICreator}
 */
export class KeyBoardCreator implements ICreator {
    create(properties: PropertyDescriptorMap): KeyBoard {
        return new KeyBoard(properties["canvas"] as HTMLCanvasElement);
    }
}