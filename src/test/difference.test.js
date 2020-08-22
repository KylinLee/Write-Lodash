import defference from "../lib/difference"
import _ from "lodash"
import { difference } from "lodash"
import { isExportDeclaration } from "typescript"

const standard1 = _.difference([3, 2, 1, ""], [4, 2, ""])
const standard2 = _.difference([{ a: 1 }, { b: 2 }, { a: 2 }], [{ a: 1 }])
const standard3 = _.difference([NaN, +0, -0, 1, 2, 3], [NaN, +0, -0])

const testValue1 = difference([3, 2, 1, ""], [4, 2, ""])
const testValue2 = difference([{ a: 1 }, { b: 2 }, { a: 2 }], [{ a: 1 }])
const testValue3 = difference([NaN, +0, -0, 1, 2, 3], [NaN, +0, -0])

test("difference test the number and string", () => {
    expect(testValue1).toStrictEqual(standard1)
});

test("difference test the object", () => {
    expect(testValue2).toStrictEqual(standard2)
});

test("difference test the special number", () => {
    expect(testValue3).toStrictEqual(standard3)
});