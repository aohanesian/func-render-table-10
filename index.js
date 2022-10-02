const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];
const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];
const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
];

function getInfo(array, title) {
    let TRs = [];
    for (let i = 1; i < array.length + 1; i++) {
        let TDs = [];
        for (let j = 1; j < array[i - 1].length + 1; j++) {
            if (Array.isArray(array[i - 1][j - 1])) {
                TDs.push(`<td>${array[i - 1][j - 1].join('; ')}</td>`);
            } else {
                TDs.push(`<td>${array[i - 1][j - 1]}</td>`);
            }
        }
        TRs.push(`<tr>${TDs.join(``)}</tr>`);
    }
    document.write(`<table>
<caption>${title} info</caption>
${TRs.join(``)}
</table>`);
}

getInfo(animals, `Animals`);
getInfo(food, `Food`);
getInfo(universes, `Universe`);