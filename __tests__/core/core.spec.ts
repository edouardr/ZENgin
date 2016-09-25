import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";
import * as Components from "../../src/_components";

/**
 * Create a canvas DOM element
 */
const canvas = document.createElement("canvas");

describe("Core", () => {
    // Create a GameObjectFactory
    let gameObjectfactory: Systems.GameObjectFactory = new Systems.GameObjectFactory();
    gameObjectfactory.register("GameObject", new Core.GameObjectCreator());

    // Create a Component Factory
    let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
    factory.register("KeyBoard", new Components.KeyBoardCreator());

    let gameObject: Core.GameObject = gameObjectfactory.create("GameObject", { canvas: canvas });

    describe("GameObjectCreator", () => {
        it("can create a GameObject", () => {
            expect(typeof gameObject).toBe(typeof (new Core.GameObject(canvas)));
        })
    })

    describe("GameObject", () => {
        it("should add component", () => {
            expect(gameObject.components.length).toBe(0);
            gameObject.addComponent(Components.COMPONENTS_TYPE.KEYBOARD, <Components.IComponent>factory.create("KeyBoard", { canvas: canvas }));
            expect(gameObject.components.length).toBe(1);
        })

        it("can check if it has component", () => {
            gameObject.addComponent(Components.COMPONENTS_TYPE.KEYBOARD, <Components.IComponent>factory.create("KeyBoard", { canvas: canvas }));
            expect(gameObject.hasComponent(Components.COMPONENTS_TYPE.KEYBOARD)).toBe(true);
        })

        it("can retrieve a specific component", () => {
            gameObject.addComponent(Components.COMPONENTS_TYPE.KEYBOARD, <Components.IComponent>factory.create("KeyBoard", { canvas: canvas }));
            expect(gameObject.getComponent(Components.COMPONENTS_TYPE.KEYBOARD)).not.toBe(null);
        })
    })
})