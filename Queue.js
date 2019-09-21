class Node {
    constructor() {
        this.value = null;
        this.next = null;
        this.previous = null;
    }
}

class Queue {
   
    constructor() {
        this.head = null;
        this.sizeOfQueue = 0;
    }

    enQueue(value) {
        
        let node = new Node();
        node.value = value;

        ++this.sizeOfQueue;

        if(this.head == null) {
            this.head = node;
            return;
        }

        let traverseNode = this.head;

        while(traverseNode.next != null) {
            traverseNode = traverseNode.next;
        }
        traverseNode.next = node;
    }

    deQueue(value) {
        --this.sizeOfQueue;
        this.head = this.head.next;
    }

    peek() {
        console.log(this.head.value);
    }

    size() {
        console.log(this.sizeOfQueue);
    }

    clear() {
        console.log(" Clearing the Queue ");
        this.sizeOfQueue = 0;
        this.head = null;
    }
    
}

console.log(" Started ");

var queue = new Queue();

for(let i = 0;i < 8;i++) {
    queue.enQueue(i);
}

console.log(" peek ");

console.log("");

queue.peek();

queue.deQueue();

console.log(" peek ");

console.log("");

queue.peek();

queue.deQueue();

console.log(" peek ");

console.log("");

queue.peek();

queue.deQueue();

console.log(" peek ");

console.log("");

queue.peek();

console.log(" size 😊");

console.log("");