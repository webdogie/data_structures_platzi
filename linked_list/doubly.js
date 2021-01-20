class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = firstPointer;
    holdingPointer.prev = newNode;

    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //Remove node
  remove(index) {
    if (this.length === 0) {
      console.log("List already empty");
      return undefined;
    }
    if (index > this.length - 1) {
      return undefined;
    }
    const selectedNode = this.getTheIndex(index);
    const previousNode = this.getTheIndex(index - 1);

    if (index === 0) {
      this.head = selectedNode.next;
    } else if (index === this.length - 1) {
      this.tail = previousNode;
      previousNode.next = null;
    } else {
      const postNode = this.getTheIndex(index + 1);
      previousNode.next = selectedNode.next;
      postNode.prev = previousNode;
    }
    this.length--;
    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
// console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.append(3));
// console.log(myDoublyLinkedList.append(3));
// console.log(myDoublyLinkedList.prepend(-3));
console.log(myDoublyLinkedList.insert(1, 2));
console.log(myDoublyLinkedList.remove(1));

// console.log(myDoublyLinkedList);
// console.log(myLinkedList.remove(2));
