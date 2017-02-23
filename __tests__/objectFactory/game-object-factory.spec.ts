import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";
import * as Components from "../../src/_components";

// mock a canvas element
const canvas = document.createElement("canvas");

describe("Core", () => {
  let factory: Systems.GameObjectFactory = new Systems.GameObjectFactory();
  factory.register("GameObject", new Core.GameObjectCreator());
  let keyboardConf: any = {
    "FORWARD": "Up",
    "BACKWARD": "Down"
  };


  it("it can create a GameObject", () => {
    let instance: Core.GameObject = factory.create("GameObject", { canvas: canvas });
    expect(instance instanceof Core.GameObject).toBe(true);
  })

  it("it can create only a GameObject", () => {
    factory.register("Keyboard", new Components.KeyBoardCreator());
    expect(factory.create("Keyboard", { canvas, configuration: keyboardConf })).toThrow();
  })
})