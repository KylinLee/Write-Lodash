import chunk from "../lib/chunk"
import _ from "lodash"

const standard1 = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
const standard2 = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
const standard3 = chunk([, undefined, {}, [], false, NaN, "string", 8, 9], 2)

const testValue1 = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
const testValue2 = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
const testValue3 = chunk([, undefined, {}, [], false, NaN, "string", 8, 9], 2)


test("chunk test 1", () => {
    expect(testValue1).toStrictEqual(standard1)
})

test("chunk test 2", () => {
    expect(testValue2).toStrictEqual(standard2)
})
test("chunk test 3", () => {
    expect(testValue3).toStrictEqual(standard3)
})