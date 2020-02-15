class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
 //the function below creates a unique hash for key
  _hash(key) { // _hash is a private property
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  } // O(1)

  set(key,value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  } // O(1)

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    for( let i = 0; i < currentBucket.length; i++){
      if(currentBucket[i][0] === key){
        return currentBucket[i][1];
      }
    }

  }//O(1)

  keys(){
    let keysArray = [];
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
} //O(1) - most of the time, if collision exists it's O(n)

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()
