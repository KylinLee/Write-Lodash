export default function (...args: any | any[]) {
    const newArray = [];
    for (const item of args) {
        if (item instanceof Array) {
            newArray.push(...item);
        } else {
            newArray.push(item);
        }
    }
    return newArray;
}
