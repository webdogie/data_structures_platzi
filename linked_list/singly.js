// //Example

// // 1 --> 2 --> 3 --> 4 --> 5 null

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
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
    s;
    const previousNode = this.getTheIndex(index - 1);

    if (index === 0) {
      this.head = selectedNode.next;
    } else if (index === this.length - 1) {
      this.tail = previousNode;
      previousNode.next = null;
    } else {
      previousNode.next = selectedNode.next;
    }
    this.length--;
    return this;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(-3));
// console.log(myLinkedList.insert(3, 9));

console.log(myLinkedList);
console.log(myLinkedList.remove(2));
