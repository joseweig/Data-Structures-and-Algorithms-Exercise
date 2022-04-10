// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) { // O(n^2)
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
    
            if(i == j) continue;
            
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return null;
};

var twoSumRecrsv = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] + nums[i+1] == target) {
            return [i, i+1];
        } else {
            twoSumRecrsv(nums[i+1]);
        }
    }
    return null;
};

var twoSumMemo = function(nums, target) {
    const memo = [];
    for(let i = 0; i < nums.length; i++) {
        const subs = target - nums[i];
        if(subs in memo) {
            return [memo[subs], i];
        } else {
            memo[nums[i]] = i;
        }
    }
    return [];
}

const input1 = [2,7,11,15]; //ans: [0,1]
const target1 = 9;

const input2 = [3,2,4]; //ans: [1,2]
const target2 = 6;

const input3 = [3,3]; //ans: [0,1]
const target3 = 6;

const result = twoSumMemo(input1, target1);

console.log(result);