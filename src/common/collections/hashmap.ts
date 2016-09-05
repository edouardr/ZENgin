import { Helpers } from "./helpers"

/**
 * 
 * 
 * @export
 * @class HashMap
 * @template T
 */
export class HashMap<T extends Object>  {
    /**
     * 
     * 
     * @protected
     * @type {{ [index: string]: T }}
     */
    protected map: Helpers.Array

    /**
     * 
     * 
     * @type {number}
     */
    size: number

    /**
     * Creates an instance of HashMap.
     * 
     */
    constructor() {
        this.map = [];
        this.map.length = 0;
        this.size = 0;
    }

    /**
     * 
     * 
     * @param {string} key
     * @param {T} value
     */
    public add(key: string, value: T): void {
        // if it is a new value, increment length
        if (!this.contains(value)) {
            this.size++;
            this.map.length++;
        }

        // add or replace value
        this.map[key] = value;
    }

    /**
     * Gets the value stored in map for key
     * 
     * @param {string} key - index to find in map
     * @returns {T} - Value stored in map
     */
    public get(key: string): T {
        return this.map[key];
    }

    /**
     * 
     * 
     * @param {string} key
     * @returns {boolean}
     */
    public contains(value: any, equalsFunc?: Helpers.IEqualsFunction): boolean {
        return Helpers.indexOf(value, this.map, equalsFunc) !== -1;
    }
}