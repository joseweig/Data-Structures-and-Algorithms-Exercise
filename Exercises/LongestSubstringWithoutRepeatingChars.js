// Given a string s, find the length of the longest substring 
// without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let max = 0;

    let i = 0;
    let j = 0;
    let sub = "";
    let maxSub = "";
    for(j = 0; j < s.length; j++) {
        sub = s.substring(i, j+1);

        console.log(i+','+j+': '+sub);
        
        if(!sub.includes(s[j+1])) {
            sub = s.substring(i, j+1);
            if(sub.length > max) {
                max = sub.length;
                maxSub = sub;
            }
        }
        else {
            i++;
            j = i;
        }
    }
 
    return [maxSub, max];
};

function stringContainsChar(s, c) {
    for(let i = 0; i < s.length; i++) {
        if(s[i] == c) return true;
    }
    return false;
}

let s1 = "abcabcbb"; // output 3 "abc"
let s2 = "bbbbb"; // output 1 "b"
let s3 = "pwwkew"; // output 3 "pwke"

const result = lengthOfLongestSubstring(s3);

console.log(result);