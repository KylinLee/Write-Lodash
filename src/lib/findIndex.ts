import dash from "./index"
const { identity } = dash

export default function (array: any[], predicate = identity, fromIndex = 0) {
    for (let index = fromIndex; index < array.length; index++) {
        if (predicate(array[index])) {
            return index
        }
    }
}