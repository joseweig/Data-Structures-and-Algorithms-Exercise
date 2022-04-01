class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value <= this.data) {
            if(this.left == null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if(this.right == null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if(value == this.data) {
            return true;
        } else if(value < this.data) {
            if(this.left == null) { // reached end
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if(this.right == null) { // reached end
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    printInOrder() {
        if(this.left != null) {
            this.left.printInOrder();
        }
        console.log(this.data);
        if(this.right != null) {
            this.right.printInOrder();
        }
    }

    print2d(space)
    {
        // Base case
        if (this == null)
            return;
    
        // Increase distance between levels
        space += 5; //COUNT;
    
        // Process right child first
        if(this.right != null)
            this.right.print2d(space);
    
        // Print current node after space
        let fill = "";
        for (let i = 5; i < space; i++) {
            fill += " ";
        }
        console.log(fill + this.data);
    
        // Process left child
        if(this.left != null)
            this.left.print2d(space);
    }
}

let tree = new Node(5); //root 5
tree.insert(3); // left = 3
tree.insert(4); // right = 4
tree.insert(14);
tree.insert(20);
tree.insert(10);
tree.insert(1);
tree.insert(2);
tree.insert(87);

tree.printInOrder();
tree.print2d(0);

console.log(tree.contains(14));