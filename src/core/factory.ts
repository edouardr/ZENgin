/**
 * 
 * 
 * @export
 * @class Factory
 */
export class Factory {

    /**
     * Creates an instance of Factory.
     * 
     */
    constructor(){

    }

    /**
     * Creates a new instance of a string type
     * 
     * @param {Object} scope - context on which type needs to exist
     * @param {string} type - name to instantiate
     */
    create(scope: Object, type: string): any{
        // get an array of module names
        let decomposedNamespace: string[] = type.split('.');

        // init instance with scope
        let typeInstance: any = scope;

        let index: number = 0;
        // loop through module names to get object type from scope
        while((typeInstance = typeInstance[decomposedNamespace[index]]) && decomposedNamespace.length > index && index++);

        return Object.create(typeInstance.prototype, null);
    }
}