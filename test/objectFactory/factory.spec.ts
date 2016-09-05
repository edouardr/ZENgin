import { expect } from 'chai';
import * as Core from "../../src/_core";
import * as Systems from "../../src/_systems";

describe("Core", () => {
    let factory: Systems.ObjectFactory = new Systems.ObjectFactory();
    factory.register("Entity", new Core.EntityCreator());

    it("should instantiate an Entity", function() {
        let entity = factory.create("Entity", {});
        
        expect(entity as Core.Entity).to.not.be.equal(null);
    });
})