export function day1(value) {
    let total = 0;
    const splitValue = value.split('');
    (value.split('').concat(value[0])).reduce((prev, next) => {
        if (prev === next) {
            total += parseInt(prev, 10);
        }
        return next;
    });
    return total;
}

export function day1Part2(value) {
    function getNextElement(
        array,
        index,
    ) {
        const nextValue = index + (array.length / 2);
        return nextValue < array.length
            ? array[nextValue] : array[nextValue - array.length];
    }

    let total = 0;
    const splitArray = value.split('');
    splitArray.forEach((value, index) => {
        if (value === getNextElement(splitArray, index)) {
            total += parseInt(value, 10);
        }
    });
    return total;
}
