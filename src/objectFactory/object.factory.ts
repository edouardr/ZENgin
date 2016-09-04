import * as Systems from "../_systems"

export interface IObjectFactory extends Systems.ISystem {
    create: (scope: Object, type: string, properties: PropertyDescriptorMap) => any
    register: (creator: any) => void
}

/**
 * 
 * 
 * @export
 * @class Factory
 */
export class ObjectFactory implements IObjectFactory {

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
    register(creator: any) {
        return;
    }

    /**
     * Creates a new instance of an object from a string.
     * 
     * @param {Object} scope - context on which type needs to exist
     * @param {string} type - type name to instantiate
     * @param {PropertyDescriptorMap} properties - properties to initialize the object with
     */
    create(scope: Object, type: string, properties: PropertyDescriptorMap): any {
        // get an array of module names
        let decomposedNamespace: string[] = type.split('.'),
            // init instance with scope
            typedInstance: any = scope,
            // init index at 0, to loop through decomposedNamespace
            index: number = 0;

        // loop through module names to get object type from scope
        while ((typedInstance = typedInstance[decomposedNamespace[index]]) && decomposedNamespace.length > index && ++index);

        // throw exception if type was not found on scope
        if (!typedInstance) throw new TypeError(`${type} not found on ${scope}`);

        // return new instance of type
        return Object.create(typedInstance.prototype, properties);
    }

    /**
     * 
     * 
     * @param {number} dt
     * @returns
     */
    update(dt: number) {
        return;
    }

    /**
     * 
     * 
     * @returns
     */
    init() {
        return;
    }

    /**
     * 
     * 
     * @param {*} message
     * @returns
     */
    sendMessage(message: any) {
        return;
    }
}