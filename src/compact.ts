export default function compact(array: any[]) {
    return array.filter((val) => {
        return !!val;
    });
}
