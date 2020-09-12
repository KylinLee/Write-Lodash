// 利用数组方法 reduce() 使用此方法会丢失为空的值

// export default function (array: any[], size = 1) {
//     if (array.length === 0 || size === 0) {
//         return [];
//     } else {
//         return array.reduce(
//             (acc, cur) => {
//                 if (acc[acc.length - 1].length === size) {
//                     acc.push(new Array());
//                 }
//                 acc[acc.length - 1].push(cur);
//                 return acc;
//             },
//             [new Array()]
//         );
//     }
// }

// 直接使用for循环
export default function (array: any[], size = 1) {
    if (array.length === 0 || size === 0) {
        return [];
    } else {
        const newArray: any[] = [new Array()];
        for (const item of array) {
            if (newArray[newArray.length - 1].length === size) {
                newArray.push([]);
            }
            newArray[newArray.length - 1].push(item);
        }
        return newArray;
    }
}
