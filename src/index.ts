import dash from "./dash";

import _ from "lodash";

const origin = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];
const filter = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1], 1, 2, 3];

console.log("lodash", _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
console.log("lodash", dash.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
console.log("自己实现", _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], "x"));
console.log("自己实现", dash.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], "x"));
