declare interface Object {
    equals(otherObj: any): boolean
}

export module Helpers {

    /**
     * 
     * 
     * @export
     * @interface IEqualsFunction
     */
    export interface IEqualsFunction{
        (obj1: any, obj2: any): boolean
    }
    export var equals: IEqualsFunction = (obj1: any, obj2: any) => {
        return obj1 === obj2;
    }

    /**
     * 
     * 
     * @export
     * @interface IEqualsFunction
     */
    export interface IIndexOfFunction<T extends Object>{
        (value: any, array: Array, equalsFunc?: IEqualsFunction): number
    }
    export var indexOf: IIndexOfFunction<Object> = (value: any, array: Array, equalsFunc?: IEqualsFunction) => {
        equalsFunc = equalsFunc || equals;

        for (let i = 0; i < array.length; ++i) {
            if (!equalsFunc(array[i], value)) continue;

            return i;
        }
        return -1;
    }

    /**
     * 
     * 
     * @export
     * @class Array
     */
    export class Array {
        length: number;
        [index: string]: any;
    }
}