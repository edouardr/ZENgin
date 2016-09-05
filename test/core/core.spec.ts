import { expect } from 'chai';
import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";

describe("Core", () => {
    let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
    factory.register("Entity", new Core.EntityCreator());

    it("should return 25", function () {
        let instance: Core.Entity = factory.create("Entity", {});
        //demonstrates use of custom matcher
        expect(instance.func(5)).to.be.equal(25);
    });
})