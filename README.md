![unpopping](https://i.imgur.com/LNRR568.gif)

# unpop
Annoyed by inconsistent Javascript nomenclature?

- removing an element from the head of an array? *shift*
- adding an element to the head of an array? *unshift*
- removing an element from the tail of an array? *pop*
- adding an element to the tail of an array? **unpop** - obviously!

## Installation
```
npm install unpop
```

## Examples
```javascript

require('unpop');
const myArray = [1, 2, 3];
myArray.unpop(4);
console.log(myArray); // [1, 2, 3, 4]
```