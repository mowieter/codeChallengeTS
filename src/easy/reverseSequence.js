"use strict";
// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseSeq = void 0;
// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
const reverseSeq = (n) => {
    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
};
exports.reverseSeq = reverseSeq;
//# sourceMappingURL=reverseSequence.js.map