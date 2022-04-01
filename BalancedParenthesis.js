const tokens = [ { open: '(', close: ')' }, 
                 { open: '{', close: '}' }, 
                 { open: '[', close: ']' } ];

function isBalanced(input) {
    let stack = [];
    for(let i = 0; i < input.length; i++) {
        if(isOpen(input[i])) {
            stack.push(input[i]);
        }
        else {
            if(stack.length == 0 || !isMatch(stack.pop(), input[i])) {
                return false;
            }
        }
    }

    return stack.length == 0;
}

function isOpen(c) {
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i].open == c) {
            return true;
        }
    }
    return false;
}

function isMatch(open, close) {
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i].open == open) {
            return tokens[i].close == close;
        }
    }
    return false;
}

const test_cases = ["{}()[{}]",
                    "[({})]",
                    "({[]})",
                    "[({)}]",
                    "({[})",
                    "()}[]",
                    "()[]}",
                    "{}}",
                    "(){}{})(){{(){(}{)}()}())}}})",
                    "asjdb^#&^&*(",
                    "672-1",
                    ""];

test_cases.forEach((value) => {
    console.log(value + " " + isBalanced(value));
});