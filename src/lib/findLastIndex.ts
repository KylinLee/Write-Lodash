import dash from "./index"
const { identity } = dash

export default function (array: any[], predicate = identity, fromIndex: number) {
    for (let index = array.length - 1; index >= 0; index--) {
        if (predicate(array[index])) {
            return index
        }
    }
}