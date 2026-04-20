//MAP
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2,4,6,8]

//FILTER
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 17 },
];

const adults = users.filter((u) => u.age >= 18);
console.log(adults);

//REDUCE
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10

//FIND
const users = [{ id: 1 }, { id: 2 }];
const user = users.find((u) => u.id === 2);
console.log(user);

//SOME
const nums = [1, 2, 3];
const hasEven = nums.some((n) => n % 2 === 0);
console.log(hasEven); // true

//EVERY
const nums = [2, 4, 6];
const allEven = nums.every((n) => n % 2 === 0);
console.log(allEven); // true

//FOREACH
const nums = [1, 2, 3];
nums.forEach((n) => console.log(n));
