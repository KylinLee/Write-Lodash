// 使用for循环
export default function (array: any | any[], n: number = 1) {
    const newArray: any[] = []
    const length = array.length
    for (let i = 0; i < length; i++) {
        if (i >= n) {
            newArray.push(array[i])
        }
    }
    return newArray
}

// 使用slice、splice方法
export function drop(array: any | any[], n: number = 1) {
    const newArray = array.slice()
    newArray.splice(0, n)
    return newArray
}