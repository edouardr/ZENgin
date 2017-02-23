import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";

// mock a canvas element
const canvas = document.createElement("canvas");

describe("Core", () => {
  let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
  factory.register("GameObject", new Core.GameObjectCreator());

  it("it can create an object", () => {
    let instance: Core.GameObject = factory.create("GameObject", { canvas: canvas });
    expect(typeof instance).toBe(typeof (new Core.GameObject(canvas)));
  })
})