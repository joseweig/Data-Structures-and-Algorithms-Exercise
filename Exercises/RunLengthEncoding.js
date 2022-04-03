function encode(input) {

    if(input == undefined || input.length == 0)
        return "invalid input";

    let output = "";
    let prevChar = "";
    let counter = 0;

    for(let i = 0; i < input.length; i++) {
        
        if(input[i] != prevChar) {
            if(prevChar != "") {
                output = output.concat(prevChar).concat(counter);
            }
            prevChar = input[i];
            counter = 1;
        }
        else
            counter++;
    }
    output = output.concat(prevChar).concat(counter);

    return output;
}

function decode(input) {

    if(input == undefined || input.length == 0 | input.length % 2 != 0)
        return "invalid input";

    let output = ""

    for(let i = 0; i < input.length; i+=2) {
        let value = input[i];
        let count = input[i + 1];

        for(let j = 0; j < count; j++) {
            output = output.concat(value);
        }
    }

    return output;
}

const input = "aaaaaabbcaggg";
console.log("Input: " + input);

const encoded = encode(input);
console.log("Encoded: " + encoded);

const decoded = decode(encoded);
console.log("Decoded: " + decoded);