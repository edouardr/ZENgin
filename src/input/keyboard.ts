/// <reference path="../core/components.ts" />

namespace Components {
    export interface IKeyBoard extends IComponent {
        keyState: Array<boolean>,
        isDown: (keyCode: number) => boolean
    }

    export class KeyBoard implements IKeyBoard {
        keyState: Array<boolean>
        constructor(canvas: HTMLCanvasElement) {
            var self = this;

            canvas.addEventListener("keydown", function (event) {
                self.keyState[event.keyCode] = true;
            });

            canvas.addEventListener("keyup", function (event) {
                self.keyState[event.keyCode] = false;
            });
        }

        isDown(keyCode: number) {
            return this.keyState[keyCode] === true;
        }
    }
}
