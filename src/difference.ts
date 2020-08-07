export default function (array: any[] | any, value: any[] = []) {
    if (array instanceof Array) {
        if (value instanceof Array && value.length !== 0) {
            const filter = new Set(value);
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
