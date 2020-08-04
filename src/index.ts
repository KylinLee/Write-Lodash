import dash from "./dash";
import { chunk } from "./chunk";

import _ from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr1 = [false, null, 0, "", undefined, 1, 2, 3, {}, ,];

console.log(chunk(arr, 3));
console.log(dash.chunk(arr, 3));
console.log(_.chunk(arr, 3));
