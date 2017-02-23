import { Collections } from "../_utils"
import { ICreator } from "./creator"
import { ObjectFactory } from "../_systems"
import * as Systems from "../_systems"
import * as Core from "../_core"

export class GameObjectFactory extends ObjectFactory implements Systems.ISystem {

    constructor() {
        super();
        this.init();
    }

    update(dt: number): void {
        // delete game inactive objects

        return;
    }

    init(): void {
        this.map = new Collections.HashMap<ICreator>();
        this.objectList = new Array<Core.IGameObject>();
        return;
    }

    sendMessage(message: any): void {
        return;
    }
}