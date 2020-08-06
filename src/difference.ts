export default function (array: Array<any>, value: any[]) {
    if (value instanceof Array && value.length !== 0) {
        const filter = new Set(value);
        const newArray = [];
        for (let val of filter) {
            for (let item of array) {
                if (val !== item) {
                    if (val.toString !== "NaN" && item.toString() !== "NaN") {
                        newArray.push(item);
                    }
                }
            }
        }
    } else {
        return new Array(...array);
    }
}
