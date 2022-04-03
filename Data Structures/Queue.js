class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEMpty() {
        return head == null;
    }
    
    peek() {
        return this.head.data;
    }

    add(data) {
        let node = new Node(data);
        if(this.tail != null)
            this.tail.next = node;

        this.tail = node;

        if(this.head == null)
            this.head = node;
    }

    remove() {
        let data = this.head.data;
        this.head = this.head.next;
        if(this.head == null) {
            this.tail = null;
        }
        return data
    }
}

let queue = new Queue();

queue.add("test1");
queue.add("test2");
queue.add("test3");
queue.add("test4");
queue.add("test5");

console.log(queue);

console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());

console.log(queue);

queue.add("test6");
queue.add("test7");

console.log(queue);

console.log(queue.remove());

console.log(queue);