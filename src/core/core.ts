import { ICreator } from "../objectFactory/creator"

export class Entity extends Object {
    public func(x: number): number { return x * x; }

    equals(otherObject: Entity): boolean{
        return this.func(5) === otherObject.func(5);
    }
}

export class EntityCreator implements ICreator{
    create(): Entity{
        return new Entity();
    }
}