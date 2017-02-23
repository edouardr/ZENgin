import { Collections } from "../_utils"
import { ICreator } from "./creator"
import * as Systems from "../_systems"

export interface IObjectFactory {

    init(): void

    register(type: string, creator: ICreator): void

    create(type: string, properties: PropertyDescriptorMap): any
}

export class ObjectFactory implements IObjectFactory {

    protected map: Collections.HashMap<ICreator>
    protected objectList: any[]
    
    constructor() {
        this.init();
        return;
    }

    public init(): void {
        this.map = new Collections.HashMap<ICreator>();
        this.objectList = [];
        return;
    }

    public register(type: string, creator: ICreator): void {
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
    public create(type: string, properties: PropertyDescriptorMap): any {
        var newObject: any = this.map.get(type).create(properties);

        this.objectList.push(newObject);

        return newObject;
    }
}