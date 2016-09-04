import { expect } from 'chai';
import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";

describe("Core", () => {
    let factory: Systems.ObjectFactory = new Systems.ObjectFactory();

    it("should instantiate an Entity", function() {
        let entity = factory.create(window, "Core.Entity", {}) as Core.Entity;
        //demonstrates use of custom matcher
        expect(entity.func(5)).to.be.equal(25);
    });
})