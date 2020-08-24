import chunk from "../lib/chunk"
import _ from "lodash"

const testValue1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const testValue2 = [, undefined, {}, [], false, NaN, "string", 8, 9]


test("chunk test the different zise", () => {
    for (let turn = 0; turn < 20; turn++) {
        expect(chunk(testValue1, turn)).toStrictEqual(_.chunk(testValue1, turn))
    }
})

// lodash的chunk函数处理`empty`空值的时候会返回`undefined`
// 如 [,]会返回[[undefined]]
// 个人认为应该保留原值，不做处理

// test("chunk test specail value", () => {
//     expect(chunk(testValue2)).toStrictEqual(_.chunk(testValue2))
// })