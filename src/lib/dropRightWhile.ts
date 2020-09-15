import identity from "./identity"

export default function (array: [any], predicate = identity) {
    let end = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element, index, array)) {
            end = index
            break
        }
    }
    return array.slice(0, end)
}