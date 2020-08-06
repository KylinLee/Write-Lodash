import dash from "./dash";

import _ from "lodash";

const arr0 = 0;
const arr1 = [false, null, 0, , "", "string", undefined, 1, 2, 3, {}, [], [1]];

console.log("lodash", _.concat(arr0, arr1));
console.log("自己实现", dash.concat(arr0, arr1));
