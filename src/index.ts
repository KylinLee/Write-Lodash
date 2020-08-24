import dash from "./lib/dash";
import _ from "lodash";

const origin = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];


console.log(dash.dropRight(origin), 20)
console.log(_.dropRight(origin), 20)
console.log(dash.drop(origin), 20)
console.log(_.drop(origin), 20)