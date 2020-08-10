import dash from "./dash";
import { drop } from "./drop"

import _ from "lodash";

const origin = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];
const filter = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];

function diff(i: any, o: any) {
    return i + 1 === o ? true : false
}
console.log(_.differenceWith([0, 1, 2, 3], [3, 1, 2], diff))
console.log(dash.differenceWith([0, 1, 2, 3], [3, 1, 2], diff))

console.log(_.drop(origin, 2))
console.log(origin)
console.log(dash.drop(origin, 2))
console.log(origin)
console.log(drop(origin, 2))
console.log(origin)
