declare interface Object {
    equals(otherObj: any): boolean
}

export module Helpers {

    export interface IEqualsFunction{
        (obj1: any, obj2: any): boolean
    }
    export var equals: IEqualsFunction = (obj1: any, obj2: any) => {
        return obj1 === obj2;
    }
    
}