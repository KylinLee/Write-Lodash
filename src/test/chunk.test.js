import chunk from "../lib/chunk"
import _ from "lodash"

const testValue1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const testValue2 = [, undefined, {}, [], false, NaN, "string", 8, 9]


test("chunk test the different zise", () => {
    for (let turn = 0; turn < 20; turn++) {
        expect(chunk(testValue1, turn)).toStrictEqual(_.chunk(testValue1, turn))
    }
})

test("chunk test specail value", () => {
    expect(chunk(testValue2)).toStrictEqual(_.chunk(testValue2))
})