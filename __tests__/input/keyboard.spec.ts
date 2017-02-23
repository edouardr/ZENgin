import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";
import * as Components from "../../src/_components";
import { Collections } from "../../src/_utils"

const canvas = document.createElement("canvas");

describe("Keyboard Input", () => {
  let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
  factory.register("Keyboard", new Components.KeyBoardCreator());

  let gameObjectfactory: Systems.GameObjectFactory = new Systems.GameObjectFactory();
  gameObjectfactory.register("GameObject", new Core.GameObjectCreator());
  let keyboardConf: any = {
    "FORWARD": "ArrowUp",
    "BACKWARD": "ArrowDown"
  };
  let go: Core.GameObject = gameObjectfactory.create("GameObject", { canvas })
  let comp: Components.KeyBoard = factory.create("Keyboard", { canvas, configuration: keyboardConf });


  it("it loads the configuration", () => {
    expect(comp.KeyMap.get("ArrowUp")).toBe("FORWARD");
  })

  it("it listens to keyDown event", (done) => {

    let keyboardEvent = new KeyboardEvent("keydown", { key: "ArrowUp", code: 'ArrowUp', location: 0 });

    comp.KeyDown.subscribe((data?: string) => {
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it listens to keyUp event", (done) => {
    let keyboardEvent = new KeyboardEvent("keyup", { key: "ArrowUp", code: 'ArrowUp', location: 0 });

    comp.KeyUp.subscribe((data?: string) => {
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it captures the correct key event", (done) => {
    let keyboardEvent = new KeyboardEvent("keydown", { key: "ArrowUp", code: 'ArrowUp', location: 0 });

    comp.KeyDown.subscribe((data?: string) => {
      expect(comp.isDown("ArrowUp")).toBe(true);
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it sends the correct message", (done) => {
    let keyboardEvent = new KeyboardEvent("keydown", { key: "ArrowUp", code: 'ArrowUp', location: 0 });

    go.addComponent(Components.COMPONENT_TYPES.KEYBOARD, comp);
    comp.KeyDown.subscribe((data?: string) => {
      expect(data).toBe("FORWARD");
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })
})