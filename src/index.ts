import compact from "./compact";
import _ from "lodash";

const arr = [1, 3, 34];

const arr1 = [false, null, 0, "", undefined, 1, 2, 3, {}, ,];

console.log(compact(arr1));

console.log(compact([arr1]));
