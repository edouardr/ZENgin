import { Helpers } from "./helpers"

export class HashMap<T extends Object>  {

    protected map: { [key: string]: T }

    size: number

    /**
     * Creates an instance of HashMap.
     * 
     */
    constructor() {
        this.map = {};
        this.size = 0;
    }

    public add(key: string, value: T): void {
        // if it is a new value, increment length
        if (!this.contains(value)) {
            this.size++;
        }

        // add or replace value
        this.map[key] = value;
    }

    public get(key: string): T {
        return this.map[key];
    }

    public containsKey(key: string): boolean {
        return (key in this.map);
    }

    public contains(value: any, equalsFunc?: Helpers.IEqualsFunction): boolean {
        equalsFunc = equalsFunc || Helpers.equals;

        for (var key in this.map) {
            if (equalsFunc(this.map[key], value)) {
                return true;
            }
        }
        return false;
    }

    public remove(key: string): void {
        if (this.containsKey(key)) {
            delete this.map[key];
        }
    }
}