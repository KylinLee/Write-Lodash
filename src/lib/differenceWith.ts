export default function (array: any | any, values: any | any[] = [], comparator?: (arrVal: any, othVal: any) => boolean) {
    if (array instanceof Array) {
        if (values instanceof Array && values.length !== 0) {
            const filter = new Set(values);
            const newArray: any = [];
            for (const item of array) {
                if (comparator) {
                    let status = true
                    for (const value of filter) {
                        if (comparator(item, value)) {
                            status = false
                            break
                        }
                    }
                    if (status) {
                        newArray.push(item)
                    }
                } else {
                    if (!filter.has(item)) {
                        newArray.push(item)
                    }
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