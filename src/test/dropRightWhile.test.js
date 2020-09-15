import dropRightWhile from "../lib/dropRightWhile"
import _ from "lodash"

const user = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
]

test("dropRightWhile test", () => {
    expect(dropRightWhile(user, function (o) { return !o.active; }))
        .toStrictEqual(_.dropRightWhile(user, function (o) { return !o.active; }))
});