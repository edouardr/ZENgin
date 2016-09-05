import * as Systems from "../_systems"
import { ICreator } from "./creator"
import { Collections } from "../_utils"

export interface IObjectFactory extends Systems.ISystem {
    create(type: string, properties: PropertyDescriptorMap): any
    register(type: string, creator: ICreator): void
}

/**
 * 
 * 
 * @export
 * @class Factory
 */
export class ObjectFactory implements IObjectFactory {

    private map: Collections.HashMap<ICreator>
    private objectList: any[]
    
    /**
     * Creates an instance of Factory.
     * 
     */
    constructor() {
        this.init();
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

    /**
     * 
     * 
     * @param {number} dt
     * @returns
     */
    update(dt: number): void {
        return;
    }

    /**
     * 
     * 
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
     * @param {*} message
     * @returns
     */
    sendMessage(message: any): void {
        return;
    }
}