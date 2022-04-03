const inputStack = [4,2,1,3,9,4,2,6,8,5,6,7,5,3,2];
const tempStack = [];

let buffer = 0;

while(inputStack.length > 0) {

    buffer = inputStack.pop();

    while(tempStack.length > 0 && tempStack[tempStack.length-1] > buffer) {
        inputStack.push(tempStack.pop());
    }

    tempStack.push(buffer);
}


console.log(inputStack);
console.log(tempStack);