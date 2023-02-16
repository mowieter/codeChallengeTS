"use strict";
// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeByKey = void 0;
function removeByKey(arr, key) {
    const originalLength = arr.length;
    arr = arr.filter((item) => item !== key);
    if (arr.length === originalLength) {
        return false;
    }
    else {
        return arr;
    }
}
exports.removeByKey = removeByKey;
//# sourceMappingURL=needsTest.js.map