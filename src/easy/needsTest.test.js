"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const needsTest_1 = require("./needsTest");
describe("removeByKey", () => {
    test("removes all matching items from the array", () => {
        const arr = [1, "foo", 2, "foo", "bar", "foo"];
        const key = "foo";
        const expected = [1, 2, "bar"];
        const result = (0, needsTest_1.removeByKey)(arr, key);
        expect(result).toEqual(expected);
    });
    test("returns false if no items match the key", () => {
        const arr = [1, "foo", 2, "bar"];
        const key = "baz";
        const expected = false;
        const result = (0, needsTest_1.removeByKey)(arr, key);
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=needsTest.test.js.map