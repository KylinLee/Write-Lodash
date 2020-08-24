import concat from "../lib/concat"
import _ from "lodash"


test("concat test array concat array", () => {
    expect(concat([1, 2, 3], [1, 2, 4], [1, 2, 3])).toStrictEqual(_.concat([1, 2, 3], [1, 2, 4], [1, 2, 3]))
});

test("concat test array concat other value", () => {
    expect(concat(1, 2, 3, [1, 2, 3], 1, 2, 3)).toStrictEqual(_.concat(1, 2, 3, [1, 2, 3], 1, 2, 3))
});

test("concat test specail value", () => {
    expect(concat()).toStrictEqual(_.concat())
    expect(concat([,])).toStrictEqual(_.concat([,]))
    expect(concat([,], [])).toStrictEqual(_.concat([,], []))
    expect(concat([,], [1])).toStrictEqual(_.concat([,], [1]))
});