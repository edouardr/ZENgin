import * as Components from "../_components"
import { Collections, Messaging, Common, Events } from "../_utils"
import { ICreator } from "../objectFactory/creator"

export interface IKeyBoard extends Components.IComponent {
  isDown(keyCode: string): boolean
  loadConfiguration(configuration?: any): void
}

export class KeyBoard extends Components.Component implements IKeyBoard {

  private _keyState: Common.INameToValueMap<boolean>
  private _canvas: HTMLCanvasElement
  private _keyMap: Collections.HashMap<string>
  private _onKeyDown: Events.GameEvent<string>
  private _onKeyUp: Events.GameEvent<string>

  public get KeyDown(): Events.IGameEvent<string> { return this._onKeyDown; }
  public get KeyUp(): Events.IGameEvent<string> { return this._onKeyUp; }
  public get KeyMap(): Collections.HashMap<string> { return this._keyMap; }

  constructor(canvas: HTMLCanvasElement, configuration?: any) {
    super();
    this._canvas = canvas;
    this.init();
    this.loadConfiguration(configuration);
  }

  public update(dt: number): void {
    return;
  }

  public init(): void {
    this._active = true;

    this._canvas.addEventListener("keydown", (evt) => { this.keyDown(evt); });
    this._canvas.addEventListener("keyup", (evt) => { this.keyUp(evt); });

    this._keyState = {};
    this._keyMap = new Collections.HashMap<string>();
    this._onKeyDown = new Events.GameEvent<string>();
    this._onKeyUp = new Events.GameEvent<string>();

    return;
  }

  private keyDown(event: KeyboardEvent) {
    this._keyState[event.code] = true;
    this._onKeyDown.publish(this._keyMap.get(event.code));
    return;
  }

  private keyUp(event: KeyboardEvent) {
    this._keyState[event.code] = false;
    this._onKeyUp.publish(this._keyMap.get(event.code));
    return;
  }

  public sendMessage(msg: Messaging.IMessage): void {
    return;
  }

  public isActive(): boolean {
    return this._active;
  }

  public shutDown() {
    return;
  }

  public isDown(keyCode: string) {
    return this._keyState[keyCode];
  }

  public loadConfiguration(configuration?: any) {
    if (configuration === undefined) {
      throw Error("Cannot load empty configuration");
    }
    this._keyMap = new Collections.HashMap<string>();

    for (let prop in configuration) {
      this._keyMap.add(configuration[prop], prop);
    }
  }
}

export class KeyBoardCreator implements ICreator {
  public create(properties: PropertyDescriptorMap): KeyBoard {
    return new KeyBoard(properties["canvas"] as HTMLCanvasElement, properties["configuration"]);
  }
}