
export interface EventHandlerFunc<T> {
  (data?: T): void
}

export interface IGameEvent<T> {
    subscribe(handler: EventHandlerFunc<T>) : void;
    unsubscribe(handler: EventHandlerFunc<T>) : void;
    publish(data?: T) : void;
}

export class GameEvent<T> implements IGameEvent<T> {
    private _handlers: EventHandlerFunc<T>[] = [];

    public subscribe(handler: EventHandlerFunc<T>) {
        this._handlers.push(handler);
    }

    public unsubscribe(handler: EventHandlerFunc<T>) {
        this._handlers = this._handlers.filter(h => h !== handler);
    }

    public publish(data?: T) {
        this._handlers.slice(0).forEach(h => h(data));
    }
}