import identity from "./identity"

export default function (array: any[] | any, value: any[] | any = [], iteratee: any | any[] = identity) {
    if (array instanceof Array) {
        if (value instanceof Array && value.length !== 0) {
            let iterator: (item: any | any[]) => any
            if (typeof iteratee === "function") {
                iterator = iteratee
            } else if (typeof iteratee === "string") {
                iterator = (item) => {
                    if (typeof item === "object") {
                        return item[iteratee]
                    }
                }
            } else if (iteratee instanceof Array) {
                iterator = (item) => {
                    if (iteratee.indexOf(item) === -1) {
                        return item
                    }
                }
            } else if (iteratee instanceof Object) {
                const keys = Object.keys(iteratee)
                iterator = (item) => {
                    if (item instanceof Object) {
                        for (const val of keys) {
                            if (item.hasOwnProperty(val) && JSON.stringify(item[val]) === JSON.stringify(iteratee[val])) {
                                return JSON.stringify(item)
                            }
                        }
                    } /* else {
                        // 当传入的iteratee为对象时，lodash的原始数组和过滤数组的每一项必须为对象
                        // 如[{x:0},1]这种情况下，lodash会返回空数组[]
                        // 这样似乎不够强大，lodash在这种特殊情况下无法使用，取消此注释，将兼容这种情况
                        return item
                    } */
                }
            }
            value = value.map((item) => { return iterator(item) })
            const filter = new Set(value);
            const transArray = array.map((item) => { return iterator(item) })
            const newArray: any = [];
            transArray.forEach((val, index) => {
                if (!filter.has(val)) {
                    newArray.push(array[index])
                }
            })
            return newArray;
        } else {
            return new Array(...array);
        }
    } else {
        return []
    }
}
