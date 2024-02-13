//Array pop 
//It removes the last element from an array and returns that element.

const months= ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
console.log(months.pop());
console.log(months);

console.log(months.pop());
console.log(months);

//Array push 
//It adds the elements to the end of an array and returns the new length of the array.

const cars = ['BMW', 'Lexus', 'Tesla', 'Toyota'];
 
const addCar = cars.push('Mazda');

console.log(cars);

//Array shift 
//It removes the first element from an array

const mobiles = ['Samsung', 'Nokia', 'Apple'];
const firstElement = mobiles.shift();
console.log(mobiles);
console.log(firstElement);


//Array unshift 
// It adds the elements to the beginning of an array 

const flowers = ['roses', 'sunflower'];
console.log(flowers.unshift('lily', 'lotus'));
console.log(flowers);

//Array splice 
//It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//Remove 0 (zero) elements before index 2, and insert "2"

const numbers = ['0', '1', '3', '4', '5'];
numbers.splice(2,0,'2');
console.log(numbers);

//Array slice
//It cuts a portion of elements

const food =['pizza', 'burger', 'cheesburger', 'potatoes'];
console.log(food.slice(3));
console.log(food.slice(1,4));

// Array forEach 
//It executes a provided function once for each array element.

const students = ['Raymond', 'Sara', 'Mary'];
students.forEach((element) => console.log(element));

