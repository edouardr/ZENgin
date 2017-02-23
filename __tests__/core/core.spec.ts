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
  let keyboardConf: any = {
    "FORWARD": "Up",
    "BACKWARD": "Down"
  };

  let keyboardComp: Components.IComponent = factory.create("KeyBoard", { canvas, configuration: keyboardConf })

  describe("GameObjectCreator", () => {
    it("can create a GameObject", () => {
      expect(gameObject instanceof Core.GameObject).toBe(true);
    })
  })

  describe("GameObject", () => {
    it("should add component", () => {
      expect(gameObject.components.size).toBe(0);
      gameObject.addComponent(Components.COMPONENT_TYPES.KEYBOARD, keyboardComp);
      expect(gameObject.components.size).toBe(1);
    })

    it("can retrieve a specific component", () => {
      gameObject.addComponent(Components.COMPONENT_TYPES.KEYBOARD, keyboardComp);
      expect(gameObject.getComponent(Components.COMPONENT_TYPES.KEYBOARD)).not.toBe(null);
    })

    it("can check if it has component", () => {
      gameObject.addComponent(Components.COMPONENT_TYPES.KEYBOARD, keyboardComp);
      expect(gameObject.hasComponent(Components.COMPONENT_TYPES.KEYBOARD)).toBe(true);
    })
  })
})