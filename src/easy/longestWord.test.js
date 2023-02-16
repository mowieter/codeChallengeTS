"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const longestWord_1 = require("./longestWord");
it("Function should return the longest word", () => {
    expect((0, longestWord_1.longestWord)("a b c def")).toEqual("def");
    expect((0, longestWord_1.longestWord)("a b c d each")).toEqual("each");
    expect((0, longestWord_1.longestWord)("each step")).toEqual("step");
    expect((0, longestWord_1.longestWord)("forward each step going")).toEqual("forward");
    expect((0, longestWord_1.longestWord)("brings each step going")).toEqual("brings");
    expect((0, longestWord_1.longestWord)("brings each opportunity step going")).toEqual("opportunity");
});
//# sourceMappingURL=longestWord.test.js.map