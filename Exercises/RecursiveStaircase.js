function countPathsR(steps) {
    if(steps < 0) return 0;
    if(steps == 0) return 1;

    return countPathsR(steps - 1) + countPathsR(steps - 2) + countPathsR(steps - 3);
}

function countPathsMemo1(steps) {
    let memo = []; //new Array(steps + 1);
    return countPathsMemo(steps, memo);
}

function countPathsMemo(steps, memo) {
    if(steps < 0) return 0;
    if(steps == 0) return 1;

    if(memo[steps] == null) {
        memo[steps] = countPathsMemo(steps - 1, memo) + countPathsMemo(steps - 2, memo) + countPathsMemo(steps - 3, memo);
    }
    return memo[steps];
}

function countPathsDynamic(steps) {
    if(steps < 0) return 0;
    if(steps <= 1) return 1;

    let paths = []; //new Array(steps + 1);
    paths[0] = 1;
    paths[1] = 1;
    paths[2] = 2;

    for(let i = 3; i <= steps; i++) {
        paths[i] = paths[i - 1] + paths[i - 2] + paths[i - 3];
    }
    return paths[steps];
}

function countPathsIterative(steps) {
    if(steps < 0) return 0;
    if(steps <= 1) return 1;

    let paths = [1, 1, 2];

    for(let i = 3; i <= steps; i++) {
        let count = paths[2] + paths[1] + paths[0];
        paths[0] = paths[1];
        paths[1] = paths[2];
        paths[2] = count;
    }
    return paths[2];
}

let steps = 100;

const result = countPathsIterative(steps);

console.log(result);