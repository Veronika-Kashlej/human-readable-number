module.exports = function toReadable(number) {
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const teens = [
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
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = number.toString();
    if (str.length === 3) {
        if (str[1] === "1") {
            return `${digits[+str[0]]} hundred ${teens[+str[2]]}`.trim();
        }
        if (str[1] === "0") {
            return `${digits[+str[0]]} hundred ${digits[+str[2]]}`.trim();
        }
        return `${digits[+str[0]]} hundred ${tens[+str[1] - 2]} ${
            digits[+str[2]]
        }`.trim();
    }
    if (str.length === 2) {
        if (str[0] === "1") {
            return teens[+str[1]];
        }
        return `${tens[+str[0] - 2]}${
            +str[1] !== 0 ? " " + digits[+str[1]] : ""
        }`.trim();
    }
    return `${digits[number]}` || "zero";
};
