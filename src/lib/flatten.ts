export default function (array: any[]) {
    const newArray = []
    array.forEach((item) => {
        if (item instanceof Array) {
            for (const i of item) {
                newArray.push(i)
            }
        } else {
            newArray.push(item)
        }
    })
}