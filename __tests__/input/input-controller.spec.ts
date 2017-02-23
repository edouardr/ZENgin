import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";
import * as Components from "../../src/_components";

const canvas = document.createElement("canvas");

describe("Input Controller", () => {
  let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
  factory.register("Keyboard", new Components.KeyBoardCreator());
  let keyboardConf: any = {
    "FORWARD": "Up",
    "BACKWARD": "Down"
  };

  it("it can add a Keyboard Component", () => {
    let instance: Components.KeyBoard = factory.create("Keyboard", { canvas, configuration: keyboardConf });
    expect(instance instanceof Components.KeyBoard).toBe(true);
  })
});