// 使用for循环
export default function (array: any | any[], n = 1) {
    const newArray = []
    const length = array.length - n
    for (let i = 0; i < length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

// 使用slice、splice方法
export function drop(array: any | any[], n = 1) {
    const newArray = array.slice()
    const count = array.length - n < 0 ? n : array.length - n
    newArray.splice(count)
    return newArray
}