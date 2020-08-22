import defaultCompact from "../lib/compact"
import { compact } from "../lib/compact"
import _ from "lodash"

const standard = _.compact([false, null, 0, , "", undefined, 1, 2, 3, {}, ,])
const defaultTestValue = defaultCompact([false, null, 0, , "", undefined, 1, 2, 3, {}, ,])
const testValue = compact([false, null, 0, , "", undefined, 1, 2, 3, {}, ,])

test("default compact test", () => {
    expect(defaultTestValue).toStrictEqual(standard)
})

test("compact test", () => {
    expect(testValue).toStrictEqual(standard)
});