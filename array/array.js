// const array = ['Diego', 'Karen', "Oscar"];
// console.log(array);
// console.log(array[0]);
// array.push('Ana');
// console.log(array);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  popFirst() {
    const firstItem = this.data[0];
    this.shift(0);
    return firstItem;
  }

  addFirst(item) {
    this.unshift(0);
    this.data[0] = item;
    return item;
  }
  unshift(index) {
    this.length++;
    for (let i = this.length - 1; i > index - 1; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
  delete(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  invertWith2Arrays() {
    let newDataArray = {};
    let counter = 0;
    for (let i = this.length - 1; i > -1; i--) {
      newDataArray[counter] = this.data[i];
      counter++;
    }
    return (this.data = newDataArray);
  }

  invertSelf() {
    const firstArrayLengthIndex = this.length - 1;

    for (let i = 0; i <= Math.floor(firstArrayLengthIndex / 2); i++) {
      let temp = this.data[i];
      this.data[i] = this.data[firstArrayLengthIndex - i];
      this.data[firstArrayLengthIndex - i] = temp;
    }
    return this.data;
  }
}
const myArray = new MyArray();
myArray.push("Diego");
myArray.push("Karen");
myArray.push("Oscar");
myArray.push("oscarito");
myArray.push("Oscarsoto");
// console.log(myArray);
// console.log(myArray.get(1));
// console.log(myArray.length);

// myArray.pop();
// console.log(myArray);
// console.log(myArray.length);

// myArray.delete(1);
// console.log(myArray);
// console.log(myArray.length);

myArray.popFirst();
console.log(myArray);
console.log(myArray.length);

myArray.addFirst("Pepe");
console.log(myArray);
console.log(myArray.length);

// myArray.invertWith2Arrays();
myArray.invertSelf();
console.log(myArray);
// console.log(myArray.length);
