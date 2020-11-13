import { differenceBy } from "../lib"
import _ from "lodash"

const testArray1 = [3.1, 2.2, 1.3]
const testArray2 = [{ 'x': 2 }, { 'x': 1 }]
const testArray3 = [[1, 3], [2, 3]]

const filter = [4.4, 2.5, { 'x': 1 }, [2, 3]]

test("differenceBy test normal value", () => {
    expect(differenceBy(testArray1, filter, Math.floor))
        .toStrictEqual(_.differenceBy(testArray1, filter, Math.floor))
});

test("differenceBy test object", () => {
    expect(differenceBy(testArray2, filter, Math.floor))
        .toStrictEqual(_.differenceBy(testArray1, filter, "x"))
});

test("differenceBy test array", () => {
    expect(differenceBy(testArray1, filter))
});