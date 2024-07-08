const convert = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

const convertToRoman = (number) => {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = "";
    for (const numeral in romanNumerals) {
        while (number >= romanNumerals[numeral]) {
            result += numeral;
            number -= romanNumerals[numeral];
        }
    }
    return result;
}

convert.addEventListener("click", () => {
    const number = numberInput.value;
    
    if (!number) {
        output.innerHTML = "Please enter a valid number"
    } else if (number < 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1"
    } else if (number >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999"
    } else {
        output.innerHTML = convertToRoman(number);
    }
})

