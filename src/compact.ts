// 使用filter方法
export default function (array: any[]) {
    return array.filter((val) => {
        return !!val;
    });
}

export function compact(array: any[]) {
    const newArray = [];
    for (const val of array) {
        if (!!val) {
            newArray.push(val);
        }
    }
    return newArray;
}
