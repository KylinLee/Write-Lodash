// 改进lodash，当未传入value时lodash.fill会填充undefined，改进之后不进行处理

export default function (array: any[], value?: any, start = 0, end?: number) {
    // 如果未传入value
    if (arguments.length === 1) {
        return array
    }
    // 如果未指定end
    if (arguments.length < 4) {
        end = array.length
    }
    for (let i = start; i < end; i++) {
        array[i] = value
    }
    return array
}