import _ from "lodash"
import dash from "../lib"

const testArray = [1, 2, 3, 4, 5]

test("indexOf test", () => {
    expect(dash.indexOf(testArray, 3, 2))
        .equal(_.indexOf(testArray, 3, 2))
});