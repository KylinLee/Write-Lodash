export default function (array: any, value?: any, fromIndex = 0): number {
    if (array !== undefined && value !== undefined) {
        for (let i = fromIndex; i < array.length; i++) {
            if (sameValueZero(array[i], value)) {
                return i
            }
        }
    }
    return -1

    function sameValueZero(val1: any, val2: any) {
        if (val1 === val2) {
            return true
        }
        if (val1.toString() === "NaN" && val2.toString() === "NaN") {
            return true
        }
    }
}