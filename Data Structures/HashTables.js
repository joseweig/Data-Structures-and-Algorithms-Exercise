class HashTable {
    constructor(size) {
        this.size = 0;
        this.table = new Array(size);
    }

    put(key, value) {
        const index = this._hash(key) % this.table.length;
        if(this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            this.table[index].push([key, value]);
        }
        else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        const index = this._hash(key) % this.table.length;
        if(this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key) % this.table.length;
        if(this.table[index] && this.table[index].length) {
            for(let i = 0; i < this.table[index].length; i++) {
                if(this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }

    display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
      }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }
};

// ------------------------------------------------

const hashTable = new HashTable(128);

for(let i = 0; i < 1000; i++) {
    
    hashTable.put('clone' + i, {
        id: i,
        name: 'John',
        tag: '#' + i,
        age: 17 + i
    });
}

// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
//   });

// console.log(hashTable.get('clone30'));
console.log(hashTable.get(process.argv[2]));


// hashTable.display();
