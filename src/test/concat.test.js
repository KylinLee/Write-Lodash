import concat from "../lib/concat"
import _ from "lodash"

const standard1 = _.concat(1, 2, 3, [1, 2, 3])
const standard2 = _.concat([1, 2, 3,], [1, 2, 3])

const testValue1 = concat(1, 2, 3, [1, 2, 3])
const testValue2 = _.concat([1, 2, 3,], [1, 2, 3])

test("concat test 1", () => {
    expect(testValue1).toStrictEqual(standard1)
});

test("concat test 2", () => {
    expect(testValue2).toStrictEqual(standard2)
});