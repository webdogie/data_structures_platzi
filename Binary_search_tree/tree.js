class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value) {
    let firstNode = this.root;
    while (true) {
      if (firstNode.right === null && firstNode.left === null) {
        if (value !== firstNode.value) {
          return "No esta en el arbol";
        }
      }
      if (value === firstNode.value) {
        return firstNode;
      } else if (value < firstNode.value) {
        firstNode = firstNode.left;
      } else {
        firstNode = firstNode.right;
      }
    }
  }
}

const tree = new BinarySearchTree();

const myTree = new BinarySearchTree();

console.log(myTree.insert(5));
console.log(myTree.insert(2));
console.log(myTree.insert(1));
console.log(myTree.insert(6));
console.log(myTree.insert(7));
// console.log(myTree);
console.log(myTree.search(2));
