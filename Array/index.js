class MyArray {
    constructor(){
        this.lenght = 0;
        this.data = {}
    }

    getData(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.lenght] = item
        this.lenght++;
        return this.lenght;
    }

    pop(){
        const lastItem = this.data[this.lenght];
        this.lenght--
        delete this.data[this.lenght]
        return lastItem;
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for(let i = index; i < this.lenght -1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.lenght - 1]
        this.lenght-- 
    }
}


const newArray = new MyArray();

newArray.push('first')
newArray.push('second')
newArray.push('third')
newArray.push('forth')
newArray.push('fifth')

console.log(newArray) 
/* {
    lenght: 5,
    data: {
      '0': 'first',
      '1': 'second',
      '2': 'third',
      '3': 'forth',
      '4': 'fifth'
    }
}*/

newArray.pop()
console.log(newArray)
/**{
  lenght: 4,
  data: { '0': 'first', '1': 'second', '2': 'third', '3': 'forth' }
} */

newArray.delete(2)
console.log(newArray)
/**{
  lenght: 3,
  data: { '0': 'first', '1': 'second', '2': 'forth' }
} */
