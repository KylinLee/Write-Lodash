import dash from "../lib"
import _ from "lodash"


const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

const filter = (i) => {
    return !!i.active
}

test("findIndex test", () => {
    expect(dash.findIndex(users, filter))
        .toStrictEqual(_.findIndex(users, filter))
});