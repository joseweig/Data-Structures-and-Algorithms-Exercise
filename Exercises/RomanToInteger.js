const mapRomanNums = new Map();
mapRomanNums.set('I', 1);
mapRomanNums.set('V', 5);
mapRomanNums.set('X', 10);
mapRomanNums.set('L', 50);
mapRomanNums.set('C', 100);
mapRomanNums.set('D', 500);
mapRomanNums.set('M', 1000);

function ConvertRomanToInteger(input) {

    let result = 0;
    for(let i = 0; i < input.length; i++) {
        let intValue = mapRomanNums.get(input[i]);

        if(i == 0) {
            result += intValue;
        } else {
            if(mapRomanNums.get(input[i+1]) > intValue) {
                result -= intValue;
            } else {
                result += intValue;
            }
        }
    }
    return result;
}

function ConvertRomanToIntegerFromBack(input) {

    let result = 0;
    let prevValue = 0;
    let currValue = 0;
    for(let i = input.length-1; i >= 0; i--) {
        currValue = mapRomanNums.get(input[i]);

        if(i == input.length-1) {
            result += currValue;
        } else {
            result += currValue * (currValue >= prevValue ? 1 : -1);
        }
        prevValue = currValue;
    }
    return result;
}

const input1 = "III"; // 3
const input2 = "LVIII"; // 58
const input3 = "MCMXCIV"; // 1994
const input4 = "IV"; // 4
const input5 = "DCXXI"; // 1994

const result = ConvertRomanToIntegerFromBack(input5);
console.log(result);