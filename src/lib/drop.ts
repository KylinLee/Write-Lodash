// 使用for循环
export default function (array: any | any[], n = 1) {
    const newArray: any[] = []
    const length = array.length - n
    for (; n < array.length; n++) {
        newArray.push(array[n])
    }
    return newArray
}

// 使用slice、splice方法
export function drop(array: any | any[], n = 1) {
    const newArray = array.slice()
    newArray.splice(0, n)
    return newArray
}