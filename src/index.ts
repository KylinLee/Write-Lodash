import dash from "./dash";
import _ from "lodash";

const arr = [1, 3, 34];

const arr1 = [false, null, 0, "", undefined, 1, 2, 3, {}, ,];

console.log(dash.chunk(arr, 2));
console.log(_.chunk(arr, 2));

console.log(dash.compact(arr1));
console.log(_.compact(arr1));
