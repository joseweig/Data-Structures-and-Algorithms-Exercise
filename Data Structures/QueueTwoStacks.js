class Queue {
    constructor() {
        this.stackNewest = [];
        this.stackOldest = [];
    }

    enqueue(value) {
        this.stackNewest.push(value);
    }

    peek() {
        this.shiftStacks();
        return this.stackOldest.peek();
    }

    dequeue () {
        this.shiftStacks();
        return this.stackOldest.pop();
    }

    shiftStacks() {
        if(this.stackOldest.length == 0) {
            while(this.stackNewest.length != 0) {
                this.stackOldest.push(this.stackNewest.pop());
            }
        }
    }
}

let queue = new Queue();

queue.enqueue("test1");
queue.enqueue("test2");
queue.enqueue("test3");
queue.enqueue("test4");
queue.enqueue("test5");

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);

queue.enqueue("test6");
queue.enqueue("test7");

console.log(queue);

console.log(queue.dequeue());

console.log(queue);