// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((number) => {
//   return { value: number * 2 };
// });

// console.log(newArray);
// // Output: [ { value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }, { value: 10 } ]


// const words = ['spray', 'limit', 'elite', 'exuberant'];
// const wordsInfo = words.map((word, index, array) => {
//   return {id:index+1, word: word, length: word.length };
// });

// console.log(wordsInfo);
// // Output:
// // [
// //   { id: 1, word: 'spray', length: 5 },
// //   { id: 2, word: 'limit', length: 5 },
// //   { id: 3, word: 'elite', length: 5 },
// //   { id: 4, word: 'exuberant', length: 9 }
// // ]


// const numbers = [1, 5, 10, 15, 20]
// const newNumbers = numbers.map((number) => {
//   return number +10
// })
// console.log(newNumbers);

// const names = ["Alice", "Bob", "Charlie", "Diana"]
// const nameInfo = names.map((name) => {
//   return {name: name, length: name.length}
// })
// console.log(nameInfo)

// const employees = [
//   { name: "Alice", salary: 50000, experience: 3 },
//   { name: "Bob", salary: 60000, experience: 5 },
//   { name: "Charlie", salary: 45000, experience: 2 },
// ]

// const employeesWithTotal = employees.map((employee) =>{
//   return {
//     name: employee.name,
//     salary: employee.salary,
//     experience: employee.experience,
//     totalSalary: employee.salary + (employee.salary * employee.experience * 0.05)
//   }
// })

// console.log(employeesWithTotal)

// ⬇️ Итоговый результат
// [
//   { name: 'Alice', salary: 50000, experience: 3, totalSalary: 57500 },
//   { name: 'Bob', salary: 60000, experience: 5, totalSalary: 75000 },
//   { name: 'Charlie', salary: 45000, experience: 2, totalSalary: 49500 }
// ]


// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
// ]

// const productsWithFinalPrice = products.map((product) =>{
//   return {
//     name: product.name,
//     price: product.price,
//     finalPrice: product.price - (product.price * 0.15)
//   }
// })
// console.log(productsWithFinalPrice)

// ⬇️ Итоговый результат
// [
//   { name: 'Laptop', price: 1000, finalPrice: 850 },
//   { name: 'Mouse', price: 50, finalPrice: 42.5 },
//   { name: 'Keyboard', price: 80, finalPrice: 68 }
// ]