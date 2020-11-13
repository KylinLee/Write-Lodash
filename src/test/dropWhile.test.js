import _ from "lodash"
import { dropWhile } from "../lib"

const user = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
]

test("dropWhile test", () => {
    expect(dropWhile(user, function (o) { return !o.active; }))
        .toStrictEqual(_.dropWhile(user, function (o) { return !o.active; }))
});