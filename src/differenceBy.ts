import identity from "./identity"

export default function (array: any[] | any, value: any[] | any = [], iteratee: any | any[] | string | object = identity) {
    if (array instanceof Array) {
        if (value instanceof Array && value.length !== 0) {
            if (typeof iteratee === "function") {
                iteratee = iteratee
            } else if (typeof iteratee === "string") {
                const key = iteratee;
                iteratee = (item: any | any[]) => {
                    if (typeof item === "object") {
                        return item[key]
                    }
                }
            }
            value = value.map((item) => { return iteratee(item) })
            const filter = new Set(value);
            const transArray = array.map((item) => {
                return iteratee(item)
            })
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
