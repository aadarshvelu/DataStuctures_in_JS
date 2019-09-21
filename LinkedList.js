// Code of Linked List 

class Node {

    constructor() {
        this.value = null;
        this.next = null;
        this.previous = null;
    }

}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.sizeOfList = 0;
    }

    // To Insert a value 

    addValue(value) {
        let node = new Node();
        
        node.value = value;

        ++this.sizeOfList;

        if(this.head == null) {
            this.head = node;
        } else {
            var traversalNode = this.head;
            while(traversalNode.next != null) {
                traversalNode = traversalNode.next;
            }
            traversalNode.next = node;
        }
    }

    // To add at Start

    addAtStart(value) {
        var node = new Node();
        node.value = value;
        node.next = this.head;
        this.head = node;
        ++this.sizeOfList;
    }

    // To add at random point

    addAtSomeRandomPoint(index , value) {

        ++this.sizeOfList;

        if(index == 0) {
            this.addAtStart(value);
            return;
        }

        var node = new Node();
        node.value = value;

        var traverseNode = this.head;

        for (let i = 0;i < index-1;i++) {
            traverseNode = traverseNode.next;
        }
        let tempNode = traverseNode.next;

        traverseNode.next = node;
        node.next = tempNode;
    }

    // To delete a Node

    deleteANode(index) {
        var traverseNode = this.head;

        --this.sizeOfList;

        if(index == 0) {
            this.head = this.head.next;
            return;
        }

        for(let i = 0;i < index-1;i++) {
            traverseNode = traverseNode.next;
        }

            traverseNode.next = traverseNode.next.next;
    }

    // Returns the size of List
    
    size() {
        console.log(this.sizeOfList);
    }
    
    // To print all values in Nodes
    
    print() {
        var traverseNode = this.head;
        for(let i = 0;i < this.sizeOfList;i++) {
            console.log(traverseNode.value);
            traverseNode = traverseNode.next;
        }
    }


}


console.log("Started for singly list !");

var list = new SinglyLinkedList;

for(let i = 1;i < 7;i++) {
    list.addValue(i);  
}

list.print();

console.log(" ");

console.log("Add at started test");


list.addAtStart(0);

list.print();

console.log(" ");

console.log(" random ");

list.addAtSomeRandomPoint(5 , 8);

list.print();

console.log(" ");

console.log(" del ");

list.deleteANode(5);

list.print();

console.log(" ");

console.log(" rand ");

list.addAtSomeRandomPoint(7 , 7);

list.print();

console.log(" ");

console.log(" size of the list ");

list.sizeOfList;

console.log(" ");

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.sizeOfList = 0;
    }

    addValue(value) {

        let node = new Node();
        node.value = value;
        this.tail = node;
        ++this.sizeOfList;

        if(this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }

        let traverseNode = this.head;

        while(traverseNode.next != null) {
            traverseNode = traverseNode.next;
        }
        node.previous = traverseNode;
        traverseNode.next = node;
        
    }

    addAtStart(value) {
        let node = new Node();
        node.value = value;
        ++this.sizeOfList;
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
    }
    
    addAtSomeRandomPoint(index , value) {

        if(index == 0) {
            this.addAtBeginning(value);
            return;
        }

        else if(index == this.sizeOfList) {
            this.addValue(value);
            return;
        }

        let node = new Node();
        node.value = value;
        ++this.sizeOfList;

        if(index == this.sizeOfList) {
             this.tail = node;
        }

        let traversalNode = this.head;

        for(let i = 0;i < index-1;i++) {
            traversalNode = traversalNode.next;
        }

        node.previous = traversalNode;
        node.next = traversalNode.next;
        traversalNode.next.previous = node;
        traversalNode.next = node;

    }

    deleteANode(index) {

        --this.sizeOfList;

        let traverseNode = this.head;

        for(let i = 0;i < index-1;i++) {
            traverseNode = traverseNode.next;
        }

        if(index == this.sizeOfList) {
            this.tail = traverseNode.previous;
        }

        traverseNode.next.next.previous = traverseNode;
        traverseNode.next = traverseNode.next.next;

    }

    size() {
        console.log(this.sizeOfList);
    }
    
    print() {

        let traverseNode = this.head;

        for(let i = 0;i < this.sizeOfList;i++) {
            console.log(traverseNode.value);
            traverseNode = traverseNode.next;
        }

    }

    traverseBack() {

        let traversalNode = this.tail;

        for(let i = 0;i < this.sizeOfList;i++) {
            console.log(traversalNode.value);
            traversalNode = traversalNode.previous;
        }

    }

}

console.log("started Doubly");

list = new DoublyLinkedList();

for(let i = 1;i < 7;i++) {
    list.addValue(i);
}

list.print();

console.log("");

console.log(" let's traverse back ");

list.traverseBack();

console.log(" ");

console.log("Add at started test");

list.addAtStart(0);

list.print();

console.log("");

console.log(" let's traverse back ");

list.traverseBack();

console.log(" ");

console.log(" random ");

list.addAtSomeRandomPoint(5 , 8);

list.print();

console.log("");

console.log(" let's traverse back ");

list.traverseBack();

console.log(" ");

console.log(" del ");

list.deleteANode(5);

list.print();

console.log("");

console.log(" let's traverse back ");

list.traverseBack();

console.log(" ");

console.log(" rand ");

list.size();

list.addAtSomeRandomPoint(7 , 7);

list.print();

console.log("");

console.log(" let's traverse back ");

list.traverseBack();

console.log(" ");

console.log(" size of the list ");

list.sizeOfList;

console.log(" ");