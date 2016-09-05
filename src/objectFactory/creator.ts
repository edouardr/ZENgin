export interface ICreator {

    /**
     * 
     * 
     * @abstract
     * @returns {*}
     */
    create(properties: PropertyDescriptorMap): any;
}