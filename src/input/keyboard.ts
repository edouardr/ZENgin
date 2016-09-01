/// <reference path="../core/components.ts" />

namespace Components {
    export interface IKeyBoard extends IComponent {
        keyState: Array<boolean>,
        isDown(keyCode: number): boolean
    }

    export class KeyBoard implements IKeyBoard {
        keyState: Array<boolean>
        constructor(canvas: HTMLCanvasElement) {
            canvas.addEventListener("keydown", function (event) {
                this.keyState[event.keyCode] = true;
            });

            canvas.addEventListener("keyup", function (event) {
                this.keyState[event.keyCode] = false;
            });
        }

        isDown(keyCode: number): boolean {
            return this.keyState[keyCode] === true;
        }
    }
}
