import { identity } from "./index"

export default function (array: any[], predicate = identity) {
    let start = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!predicate(element, index, array)) {
            start = index
            break
        }
    }
    return array.slice(start)
}