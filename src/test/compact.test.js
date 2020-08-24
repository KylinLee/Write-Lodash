import defaultCompact from "../lib/compact"
import { compact } from "../lib/compact"
import _ from "lodash"

const testValue = [false, null, 0, , "", undefined, 1, 2, 3, {}, ,]

test("compact test", () => {
    expect(compact(testValue)).toStrictEqual(_.compact(testValue))
    expect(defaultCompact(testValue)).toStrictEqual(_.compact(testValue))
})