'use strict';
class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }
}
function levelOrderTraversal(root) {
    if (root == null) return;
    let queue = [];
    queue.push(root);
    queue.push(null);
    let levelElements = '';
    while (queue.length != 0) {
        let temp = queue.shift();
        if (temp == null) {
            console.log(levelElements);
            levelElements = '';
            if (queue.length > 0) {
                queue.push(null);
            }
        } else {
            levelElements = levelElements + temp.data + ' ';
            if (temp.leftNode) queue.push(temp.leftNode)
            if (temp.rightNode) queue.push(temp.rightNode)
        }
    }
}

//level - 1
let tree = new Node(1);

// level - 2
tree.leftNode = new Node(2);
tree.rightNode = new Node(3);

// level -3
tree.leftNode.leftNode = new Node(4);
tree.leftNode.rightNode = new Node(5);

tree.rightNode.leftNode = new Node(6);
tree.rightNode.rightNode = new Node(7);

// level -4
tree.leftNode.leftNode.leftNode = new Node(8);
tree.leftNode.leftNode.rightNode = new Node(9);

tree.leftNode.rightNode.leftNode = new Node(10);
tree.leftNode.rightNode.rightNode = new Node(11);

tree.rightNode.leftNode.leftNode = new Node(12);
tree.rightNode.leftNode.rightNode = new Node(13);

tree.rightNode.rightNode.leftNode = new Node(14);
tree.rightNode.rightNode.rightNode = new Node(15);
levelOrderTraversal(tree);

