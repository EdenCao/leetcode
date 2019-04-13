"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findMedianSortedArrays_linear_1 = require("./findMedianSortedArrays.linear");
const findMedianSortedArrays_logarithm_1 = require("./findMedianSortedArrays.logarithm");
const findMedianSortedArraysMethods = [findMedianSortedArrays_linear_1.findMedianSortedArrays, findMedianSortedArrays_logarithm_1.findMedianSortedArrays];
describe("find median sorted arrays", function () {
    findMedianSortedArraysMethods.forEach((findMedianSortedArrays) => {
        test("[1, 3], [2]", function () {
            expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
        });
        test("[1, 2], [3, 4]", function () {
            expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
        });
        test("[], []", function () {
            expect(findMedianSortedArrays([], [])).toEqual(null);
        });
        test("[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0, 6]", function () {
            expect(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6])).toEqual(10.5);
        });
    });
});
