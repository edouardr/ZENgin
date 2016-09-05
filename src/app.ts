import * as Core from "./_core";
import * as Systems from "./_systems";
import * as Utils from "./_utils";


/**
 * Extends the original Object interface
 * 
 * @interface Object
 */
interface Object {
    /**
     * Tests is this equals another object 
     * 
     * @param {Object} otherObj
     * @returns {boolean}
     */
    equals(otherObj: any): boolean
}

export { Core, Systems, Utils }