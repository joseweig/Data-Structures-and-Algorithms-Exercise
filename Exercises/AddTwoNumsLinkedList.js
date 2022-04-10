
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

 var addTwoNumbers = function(l1, l2) {
     
    let num1 = l1.value;
    // let num2 = l2.value;
    while(l1.next !== undefined) {
        console.log(l1.value);
        num1 = l1.value + num1;
    }
    
    // while(l2.next !== undefined) {
    //     num2 = l2.value + num2;
    // }
    
    console.log(num1);

};

addTwoNumbers([2,4,3], [5,6,4]);