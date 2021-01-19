class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //delete w/ key
  delete2(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          delete this.data[address][i];
          return deletedValue;
        }
      }
    }
    return undefined;
  }

  //return all key values
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(`Key: ${this.data[i][j][0]} index: ${i} pos ${j}`);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Marianee", 1298);
myHashTable.set("PEPEEE", 1698);
console.log(myHashTable.set("Alejandra", 2000));
// console.log(myHashTable.returnAllKeys());
console.log(myHashTable.get("Diego"));
// console.log(myHashTable.delete("Diego"));
console.log(myHashTable.getAllKeys());
