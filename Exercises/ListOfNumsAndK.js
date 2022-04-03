// Given a list of numbers and a number k, 
// return whether any two numbers from the list add up to k.
// Bonus: Can you do this in one pass?
function containsSumToK(list, k) {
    let result = false;
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length; j++) {
            if(list[i] + list[j] == k) {
                result = true;
            }
        }
    }
    return result;
}

function containsSumToKWithCache(list, k) {
    let result = false;
    let temp = [];
    for(let i = 0; i < list.length; i++) {
        if(list[i] < k) {
            temp.push(list[i]);
        }

        if(temp.length > 0) {
            for(let j = 0; j < temp.length; j++) {
                if(list[i] + temp[j] == k){
                    result = true;
                }
            }
        }
    }
    return result;
}

function containsSumToKOnePass(list, k) {

    for(let i = 0; i < list.length; i++) {
        if(list[i] + list[i+1] == k) {
            return true;
        } else {
            if(list[i] < k) {
                list[i+1] = list[i]; //swap
            }
        }
    }

    return false;
}


const list = [10, 15, 3, 7];
const list2 = [15, 2, 5, 7, 5];
let k = 137;

let result = containsSumToKOnePass(list2, k);
console.log(result);
