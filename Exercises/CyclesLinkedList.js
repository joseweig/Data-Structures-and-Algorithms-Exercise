class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if(head == null) return false;

    let fast = head.next;
    let slow = head;
    while(fast != null && fast.next != null && slow != null) {
        if(fast == slow) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}