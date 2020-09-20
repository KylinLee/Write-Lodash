import dash from "../lib/dash"
import _ from "lodash"

const testValue1 = [3, 2, 1, ""]
const testValue2 = [{ a: 1 }, { b: 2 }, { a: 2 }]
const testValue2 = [NaN, +0, -0, 1, 2, 3]
const filter1 = [4, 2, ""]
const filter2 = [{ a: 1 }]
const filter3 = [NaN, +0, -0]


test("difference test the number and string", () => {
    expect(
        dash.defference(testValue1, filter1)
    ).toStrictEqual(
        _.defference(testValue1, filter1)
    )
});

test("difference test the object", () => {
    expect(
        dash.defference(testValue2, filter2)
    ).toStrictEqual(
        _.defference(testValue2, filter2)
    )
});

test("difference test the special number", () => {
    expect(
        dash.defference(testValue3, filter3)
    ).toStrictEqual(
        _.defference(testValue3, filter3)
    )
});