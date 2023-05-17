function removeDuplicatesFromArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let originalArray = [1,2,3,1,4,6,4,4];
const newArray = removeDuplicatesFromArray(originalArray);

console.log(newArray); 
