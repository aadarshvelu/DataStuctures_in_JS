class Node {
    constructor() {
        this.value = null;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.sizeOfTree = 0;
    }

    insert(value) {

        let node = new Node();

        node.value = value;

        if(this.root == null) {
            this.root = node;
            ++this.sizeOfTree;
            return;
        }

        var tempParent = this.root;

        while (node.parent == null) {

            if(node.value < tempParent.value) {

                    if(tempParent.leftChild == null) {
                        tempParent.leftChild = node;
                        node.parent = tempParent;
                        ++this.sizeOfTree;
                    } else {
                        tempParent = tempParent.leftChild;
                    } 

                } else {

                    if(tempParent.rightChild == null) {
                        tempParent.rightChild = node;
                        node.parent = tempParent;
                        ++this.sizeOfTree;
                    } else {
                        tempParent = tempParent.rightChild;
                    }

            }
        }
    }

    preOrder(root) {
        if(root != null) {
            console.log(root.value);
            this.preOrder(root.leftChild);
            this.preOrder(root.rightChild);            
        }
    }

    postOrder(root) {
        if (root != null) {
            this.postOrder(root.leftChild);
            this.postOrder(root.rightChild);
            console.log(root.value);
        }
    }

    inOrder(root) {
        if(root != null) {
            this.inOrder(root.leftChild);
            console.log(root.value);
            this.inOrder(root.rightChild);
        }
    }
}

        console.log(" started ");

        var binaryTree = new BinaryTree();

        var arr =  [10 , 7 , 14 , 20 , 1 , 8];

        for(var i = 0;i < arr.length;i++) {
            binaryTree.insert(arr[i]);
        }

        console.log(binaryTree.sizeOfTree);
        
        console.log("");

        console.log(binaryTree.root.value);
              
        console.log("PreOrder : ");
        binaryTree.preOrder(binaryTree.root);
        console.log("PostOrder : ");
        binaryTree.postOrder(binaryTree.root);
        console.log("InOrder : ");
        binaryTree.inOrder(binaryTree.root);