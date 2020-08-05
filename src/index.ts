import dash from "./dash";
import { compact } from "./compact";

import _ from "lodash";

const arr = [false, null, 0, , "", undefined, 1, 2, 3, {}, ,];
console.log("测试数组为:", arr);

console.log("lodash输出");
console.log(_.compact(arr));

console.log("自己实现输出");
console.log(dash.compact(arr));
console.log(compact(arr));
