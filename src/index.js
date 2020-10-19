module.exports = function toReadable(number) {
    let a = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let b = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let c = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    number = number.toString().split("");
    let firstIdx = Number(number[0]);
    let secondIdx = +number[1];
    let thirdIdx = +number[2];

    switch (true) {
        case number.length === 1:
            return `${a[firstIdx]}`;
            break;
        case number.length === 2 && firstIdx === 1:
            return `${b[secondIdx]}`;
            break;
        case number.length === 2 && firstIdx > 1 && secondIdx === 0:
            return `${c[firstIdx - 2]}`;
            break;
        case number.length === 2 && firstIdx > 1 && secondIdx > 0:
            return `${c[firstIdx - 2]} ${a[secondIdx]}`;
            break;
        case number.length === 3 &&
            firstIdx >= 1 &&
            secondIdx === 0 &&
            thirdIdx === 0:
            return `${a[firstIdx]} hundred`;
            break;
        case number.length === 3 &&
            firstIdx >= 1 &&
            secondIdx === 0 &&
            thirdIdx >= 1:
            return `${a[firstIdx]} hundred ${a[thirdIdx]}`;
            break;
        case number.length === 3 && firstIdx >= 1 && secondIdx === 1:
            return `${a[firstIdx]} hundred ${b[thirdIdx]}`;
            break;
        case number.length === 3 &&
            firstIdx >= 1 &&
            secondIdx > 1 &&
            thirdIdx === 0:
            return `${a[firstIdx]} hundred ${c[secondIdx - 2]}`;
            break;
        case number.length === 3 &&
            firstIdx >= 1 &&
            secondIdx > 1 &&
            thirdIdx > 0:
            return `${a[firstIdx]} hundred ${c[secondIdx - 2]} ${
                a[thirdIdx]
            }`;
    }
};
