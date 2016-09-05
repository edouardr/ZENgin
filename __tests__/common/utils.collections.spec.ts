import { Collections } from "../../src/_utils";

describe("HashMap", () => {
    it("gives the right length", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);
        hashMap.add("third", 3);
        expect(hashMap.size).toBe(3);
    });

    it("gets the correct element", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);

        expect(hashMap.get("first")).toBe(1);
    });

    it("returns true if it contains element", () => {
        let hashMap = new Collections.HashMap<number>();
        hashMap.add("first", 1);
        hashMap.add("second", 2);

        expect(hashMap.contains(1)).toBe(true);
    });
})

describe("Helpers", () => {
    describe("Equals Method", () => {
        it("confirms equality", () => {
            expect(Collections.Helpers.equals(10, 15)).toBe(false);
        });
    });
})