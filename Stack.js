class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.sizeOfStack = 0;
        this.tail = null;
    }

    push(value) {
        let node = new Node();
        node.value = value;
        node.next = this.tail;
        ++this.sizeOfStack;
        this.tail = node;
    }    

    pop() {
        --this.sizeOfStack;
        this.tail = this.tail.next;
    }

    peek() {
        console.log(this.tail.value);
    }

    clear() {
        this.tail = null;
        this.sizeOfStack = 0;
    }

    size() {
        console.log(this.sizeOfStack);
    }


}

console.log(" started ");

var stack = new Stack();

console.log("");

for(let i = 0;i < 6;i++) {
    stack.push(i);
}

console.log(" peek ");

stack.peek();

stack.pop();

stack.peek();

stack.pop();

stack.peek();

stack.pop();

stack.peek();

for(let i = 0;i < 2;i++) {
    stack.pop(i);
}

console.log(" clearing the stack ");

stack.clear();

console.log(" size ");

console.log("");

stack.size();