
import * as Core from "./_core";
import * as Systems from "./_systems";
import * as Components from "./_components";
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
     * @param {Object} obj
     * @returns {boolean}
     */
    equals(obj: any): boolean
}

export { Core, Systems, Components, Utils }
