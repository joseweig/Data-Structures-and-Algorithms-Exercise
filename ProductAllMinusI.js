// Given an array of integers, return a new array such that 
// each element at index i of the new array is the product of all 
// the numbers in the original array except the one at i.

function productAllMinusI(input) { // O(n^2) quadractic time complexity

    let output = [];
    for(let i = 0; i < input.length; i++) {
        let product = 1;
        for(let j = 0; j < input.length; j++) {
            if(i != j)
                product *= input[j];
        }
        output[i] = product;
    }

    return output;
}

function productAllMinusIDiv(input) { // O(2n) = O(n) linear time complexity
    
    let output = [];
    let product = 1;
    for(let i = 0; i < input.length; i++) {
        product *= input[i];
    }
    for(let i = 0; i < input.length; i++) {
        output[i] = product / input[i];
    }
    return output;
}

const input = [1, 2, 3, 4, 5];

const result = productAllMinusIDiv(input);

console.log(result);