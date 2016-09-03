
import { expect } from 'chai';
import * as Core from "../../src/core/core";

describe("Core", () => {
    let instance: Core.Entity =new Core.Entity();

    it("should return 25", function() {
        //demonstrates use of custom matcher
        expect(instance.func(5)).to.be.equal(25);
    });
})