const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const res = array.map(item => item === ' ' ? 'Empty string' : item );
console.log(res);