// 使用filter方法
export default function (array: any[]) {
    return array.filter((val) => {
        return !!val;
    });
}

export function compact(array: any[]) {
    let newArray = [];
    for (let val of array) {
        if (!!val) {
            newArray.push(val);
        }
    }
    return newArray;
}
