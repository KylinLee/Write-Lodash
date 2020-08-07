import { isFunctionLike } from "typescript";

export default function (array: any[], value: any[]) {
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
}
