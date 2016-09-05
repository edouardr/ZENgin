import { expect } from 'chai';
import { Collections } from "../../src/_utils";

describe("HashMap", () => {
    it("gives the right length", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);
        hashMap.add("third", 3);
        expect(hashMap.size).to.be.equal(3);
    });

    it("gets the correct element", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);

        expect(hashMap.get("first")).to.be.equal(1);
    });

    it("returns true if it contains element", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);

        expect(hashMap.contains(1)).to.be.equal(true);
    });
})

describe("Helpers", () => {
    describe("Equals Method", () => {
        it("confirms equality", () => {
            expect(Collections.Helpers.equals(10, 15)).to.be.equal(false);
        });
    });
})