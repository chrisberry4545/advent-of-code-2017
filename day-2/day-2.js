export function day2(grid) {
    let total = 0;
    grid.forEach((row) => {
        total += row.reduce((prev, next) => (prev > next ? prev : next))
            - row.reduce((prev, next) => (prev < next ? prev : next));
    });
    return total;
}

export function day2Part2(grid) {
    let total = 0;
    grid.forEach((row) => {
        row.forEach((item) => {
            const matchingItem = row.find((otherItem) => {
                return otherItem !== item && item % otherItem === 0;
            });
            total += matchingItem ? item / matchingItem : 0;
        });
    });
    return total;
}