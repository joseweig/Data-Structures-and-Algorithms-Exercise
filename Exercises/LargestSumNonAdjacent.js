function sumLargestNonAdjacentBrute(input) {

    for(let i = 0; i < input.length; i++) {
        let sum = 0;
        for(let j = 0; j < input.length; j++) {
            if(i - j <= 1) continue;
            sum += input[i] + input[j];
        }
    }
}

const input1 = [2, 4, 6, 2, 5];
const input2 = [5, 1, 1, 5];
