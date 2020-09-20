import _ from "lodash"
import dash from "../lib/dash"

const arr1 = new Array(10)
const arr2 = new Array(10)

test("fill test", () => {
    expect(
        dash.fill(arr1, undefined)
    ).toStrictEqual(
        _.fill(arr2, undefined)
    )
});