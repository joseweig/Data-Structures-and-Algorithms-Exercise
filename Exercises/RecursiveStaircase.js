function numWays(steps, allowed) {
    let count = 0;
    for(let i = 0; i < allowed.length; i++) {
        let remain = steps % allowed[i];
        if(remain == 0) {
            count++;
        }
        else {
            count += numWays(remain, allowed);
        }
    }

    return count;
}

console.log(4 % 5);

// console.log(numWays(4, [1,3,5]));