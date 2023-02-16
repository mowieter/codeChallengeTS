"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseSequence_1 = require("./reverseSequence");
it("Function should return the reversed sequence", () => {
    expect((0, reverseSequence_1.reverseSeq)(5)).toEqual([5, 4, 3, 2, 1]);
    expect((0, reverseSequence_1.reverseSeq)(1)).toEqual([1]);
    expect((0, reverseSequence_1.reverseSeq)(3)).toEqual([3, 2, 1]);
    expect((0, reverseSequence_1.reverseSeq)(15)).toEqual([
        15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
});
//# sourceMappingURL=reverseSequence.test.js.map