"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consecutiveCount_1 = require("./consecutiveCount");
it("Function should return the consecutive count", () => {
    expect((0, consecutiveCount_1.getConsecutiveItems)("ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii", "z")).toEqual(0);
    expect((0, consecutiveCount_1.getConsecutiveItems)("ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii", "i")).toEqual(11);
    expect((0, consecutiveCount_1.getConsecutiveItems)(90000, 0)).toEqual(4);
    expect((0, consecutiveCount_1.getConsecutiveItems)(90000, 3)).toEqual(0);
});
//# sourceMappingURL=consecutiveCount.test.js.map