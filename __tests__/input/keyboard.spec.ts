import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";
import * as Components from "../../src/_components";
import * as InputConsts from "../../src/input/constants";
import { Collections } from "../../src/_utils"

const canvas = document.createElement("canvas");

describe("Keyboard Input", () => {
  const FORWARD: string = "FORWARD";
  const BACKWARD: string = "BACKWARD";

  let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
  factory.register("Keyboard", new Components.KeyBoardCreator());

  let gameObjectfactory: Systems.GameObjectFactory = new Systems.GameObjectFactory();
  gameObjectfactory.register("GameObject", new Core.GameObjectCreator());
  let keyboardConf: any = {
    FORWARD: InputConsts.INPUT_KEYS.UP,
    BACKWARD: InputConsts.INPUT_KEYS.DOWN
  };
  let go: Core.GameObject = gameObjectfactory.create("GameObject", { canvas })
  let comp: Components.KeyBoard = factory.create("Keyboard", { canvas, configuration: keyboardConf });


  it("it loads the configuration", () => {
    expect(comp.KeyMap.get(InputConsts.INPUT_KEYS.UP)).toBe(FORWARD);
  })

  it("it listens to keyDown event", (done) => {

    let keyboardEvent = new KeyboardEvent(InputConsts.INPUT_EVENTS.KEY_DOWN, { key: InputConsts.INPUT_KEYS.UP, code: InputConsts.INPUT_KEYS.UP, location: 0 });

    comp.KeyDown.subscribe((data?: string) => {
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it listens to keyUp event", (done) => {
    let keyboardEvent = new KeyboardEvent(InputConsts.INPUT_EVENTS.KEY_UP, { key: InputConsts.INPUT_KEYS.UP, code: InputConsts.INPUT_KEYS.UP, location: 0 });

    comp.KeyUp.subscribe((data?: string) => {
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it captures the correct key event", (done) => {
    let keyboardEvent = new KeyboardEvent(InputConsts.INPUT_EVENTS.KEY_DOWN, { key: InputConsts.INPUT_KEYS.DOWN, code: InputConsts.INPUT_KEYS.DOWN, location: 0 });

    comp.KeyDown.subscribe((data?: string) => {
      expect(comp.isDown(InputConsts.INPUT_KEYS.DOWN)).toBe(true);
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })

  it("it sends the correct message", (done) => {
    let keyboardEvent = new KeyboardEvent(InputConsts.INPUT_EVENTS.KEY_UP, { key: InputConsts.INPUT_KEYS.DOWN, code: InputConsts.INPUT_KEYS.DOWN, location: 0 });

    go.addComponent(Components.COMPONENT_TYPES.KEYBOARD, comp);
    comp.KeyUp.subscribe((data?: string) => {
      expect(data).toBe(BACKWARD);
      done();
    });

    canvas.dispatchEvent(keyboardEvent);
  })
})