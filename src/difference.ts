export default function (array: any[] | any, values: any[] = []) {
    if (array instanceof Array) {
        if (values instanceof Array && values.length !== 0) {
            const filter = new Set(values);
            const newArray: any = [];
            for (const item of array) {
                if (!filter.has(item)) {
                    newArray.push(item)
                }
            }
            return newArray;
        } else {
            return new Array(...array);
        }
    } else {
        return []
    }
}
