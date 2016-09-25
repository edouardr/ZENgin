import { Collections } from "../_utils"
import { ICreator } from "./creator"
import * as Systems from "../_systems"

/**
 * 
 * 
 * @export
 * @interface IObjectFactory
 */
export interface IObjectFactory {
    /**
     * 
     */
    init(): void
    
    /**
     * 
     * 
     * @param {string} type
     * @param {ICreator} creator
     */
    register(type: string, creator: ICreator): void
    
    /**
     * 
     * 
     * @param {string} type
     * @param {PropertyDescriptorMap} properties
     * @returns {*}
     */
    create(type: string, properties: PropertyDescriptorMap): any
}

/**
 * 
 * 
 * @export
 * @class Factory
 */
export class ObjectFactory implements IObjectFactory {

    /**
     * 
     * 
     * @protected
     * @type {Collections.HashMap<ICreator>}
     */
    protected map: Collections.HashMap<ICreator>

    /**
     * 
     * 
     * @protected
     * @type {any[]}
     */
    protected objectList: any[]
    
    /**
     * Creates an instance of ObjectFactory.
     * 
     */
    constructor() {
        this.init();
        return;
    }

    /**
     * 
     * 
     * @param {*} creator
     * @returns
     */
    init(): void {
        this.map = new Collections.HashMap<ICreator>();
        this.objectList = new Array();
        return;
    }

    /**
     * 
     * 
     * @param {*} creator
     * @returns
     */
    register(type: string, creator: ICreator): void {
        this.map.add(type, creator);
        return;
    }

    /**
     * Creates a new instance of an object from a string.
     * 
     * @param {Object} scope - context on which type needs to exist
     * @param {string} type - type name to instantiate
     * @param {PropertyDescriptorMap} properties - properties to initialize the object with
     */
    create(type: string, properties: PropertyDescriptorMap): any {
        var newObject: any = this.map.get(type).create(properties);

        this.objectList.push(newObject);

        return newObject;
    }
}