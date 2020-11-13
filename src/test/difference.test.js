import dash from "../lib"
import _ from "lodash"

const testValue1 = [3, 2, 1, ""]
const testValue2 = [{ a: 1 }, { b: 2 }, { a: 2 }]
const testValue3 = [NaN, +0, -0, 1, 2, 3]
const filter1 = [4, 2, ""]
const filter2 = [{ a: 1 }]
const filter3 = [NaN, +0, -0]


test("difference test the number and string", () => {
    expect(
        dash.difference(testValue1, filter1)
    ).toStrictEqual(
        _.difference(testValue1, filter1)
    )
});

test("difference test the object", () => {
    expect(
        dash.difference(testValue2, filter2)
    ).toStrictEqual(
        _.difference(testValue2, filter2)
    )
});

test("difference test the special number", () => {
    expect(
        dash.difference(testValue3, filter3)
    ).toStrictEqual(
        _.difference(testValue3, filter3)
    )
});