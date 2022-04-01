function my_fib(n) { // sort of bottom-up approach - O(n)
    if(n == 1 || n == 2)
        return 1;

    let seq = [1 , 1];
    let lastIndex = seq.length - 1;

    while(lastIndex + 1 < n) {
        seq.push(seq[lastIndex] + seq[lastIndex - 1]);
        lastIndex = seq.length - 1;
    }
    
    return seq[lastIndex];
}

function fib(n) { //O(n^2)?? or O(2^n)
    let result = 0;
    if(n == 1 || n == 2) {
        result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    return result;
}

function fib_memo(n, memo) { // O(n)?? or O(2^n)
    if(memo[n] != null)
        return memo[n];

    let result = 0;
    if(n == 1 || n == 2) {
        result = 1;
    } else {
        result = fib_memo(n-1, memo) + fib_memo(n-2, memo);
    }
    memo[n] = result;
    return result;
}

function fib_bottom_up(n) { // O(n)
    if(n == 1 || n == 2)
        return 1;

    let bottom_up = new Array(n + 1);
    bottom_up[1] = 1;
    bottom_up[2] = 1;

    for(let i = 3; i <= n; i++) {
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
    }
    
    return bottom_up[n];
}

const n = 100;

// console.log(my_fib(n));
// console.log(fib(n));
// console.log(fib_bottom_up(n));

let memo = new Array(n);
console.log(fib_memo(n, memo));