export default function chunk(array: any[], size = 1) {
    if (array.length === 0 || size === 0) {
        return [];
    } else {
        return array.reduce(
            (acc, cur) => {
                if (acc[acc.length - 1].length === size) {
                    acc.push(new Array());
                }
                acc[acc.length - 1].push(cur);
                return acc;
            },
            [new Array()]
        );
    }
}
