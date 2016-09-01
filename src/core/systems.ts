/// <reference path="../common/common.ts" />

namespace Systems {
    export interface ISystem {
        // All systems must update each game loop
        update(dt: number): void

        // It's good practice to separate the construction and initialization code.
        init(): void;

        // This recieves any messages sent to the core engine
        sendMessage(msg: Common.IMessage): void;
    }
}
