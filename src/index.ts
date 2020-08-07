import dash from "./dash";

import _ from "lodash";

const origin = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];
const filter = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];

console.log("lodash", _.difference(origin, filter));
console.log("自己实现", dash.difference(origin, filter));
