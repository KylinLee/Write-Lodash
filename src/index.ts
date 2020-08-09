import dash from "./dash";

import _ from "lodash";

const origin = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1]];
const filter = [false, null, 0, NaN, "", "string", undefined, 1, 2, 3, {}, [], [1], 1, 2, 3];

// 第三个参数接收函数
console.log("lodash", _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
console.log("自己实现", dash.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
// 第三个参数接收字符串
console.log("lodash", _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], "x"));
console.log("自己实现", dash.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], "x"));
// 第三个参数接收数组
console.log("lodash", _.differenceBy([1, 2, 3, 4, 5], [1, 2], [2, 3]));
console.log("自己实现", dash.differenceBy([1, 2, 3, 4, 5], [1, 2], [2, 3]));
// 第三个参数接收对象
console.log("lodash", _.differenceBy([{ 'x': 2 }, { 'x': 1 }, 3], [3, { 'x': 1 }], { x: 1 }))
console.log("自己实现", dash.differenceBy([{ 'x': 2 }, { 'x': 1 }, 3], [3, { 'x': 1 }], { x: 1 }))

console.log(_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual))
console.log(dash.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual))