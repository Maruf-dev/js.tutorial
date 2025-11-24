// google dev tool ni ishlataykon payt (console) paste qilishga ruxsat bermasa console'ga 'allow pasting' deb yozish kk

<!-- lesson plan -->
- alert() | confirm()
- document.body.innerHTML = 'hello'

- variable
- str => '...' or "..."
<!-- ahror web -->
- numbers
in js all numbers are number. there no differens beetween 1 or 3.5. they all are same. math operators +,-,*,/, **, %
- explain updating data with a method of likes. (like there was 10 likes and smbd liked and its now 11 likes)
NaN => 5 / 'salom'
// math in js
Math.round(2.8) => 3 // yaxlitlash

//
- most used str methods
''.toUpperCase() / .toLowerCase() / var.lastIndexOf('a') / var.indexOf('a')
var.slice(0,4) => cuts via indexs / slice(4) => stars form 4th index.
console.log("JavaScript".substring(0, 4)); // "Java"
var.substr(4,10) => 4 dan kn yana 10 ta index qo'shib hisoblaydi.
var.replace('a', 'd') => 1-a ni o'zgartiradi.
console.log("aaa".replaceAll("a", "b")); // "bbb"
var.charAt() => only takes first character from str.
var.trim() => it removes white spaces from str.
var.split('a') => it creates an array it takes as a target "a" letter and removes it.
==
console.log("Hello World".includes("World")); // true
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true
==
padStart() / padEnd() – Add padding to a string
console.log("5".padStart(3, "0")); // "005"
console.log("JS".padEnd(6, "*")); // "JS****"

// str tamplate str
let a = 'samle text'
let b = 13

let result = `Bu tamplate str ${a} ni op keladi va ${b} ta harf bor`

// using tamplate str with html tags
let app = document.querySelector('#app'); => in html should be a div with and id #app
let html = `
    <h2>Mavzu ${a} haqida</h2>
    <p>${b} har bor</p>

`
app.innerHTML = html;
====
`template string ` => back tick' bn yaratilgan str ni nomlanishi
template string'ni + tarafi interpolation'ga yaxshi.
(interpolation) degani =>insert value directly into a string.
====
`template string ` => can be used as multi line string
`like
this ` output: 'like\nthis'
====

//ARRAY

//before explaining array and objects. there was explanation about what premetive/referance (more complex).
let mehmonlar = ['sarvar','aziz', 'komil']
console.log(mehmonlar[1]) // 'aziz'
mehmonlar[0] = 'ibrohim'

// explanation about property and methods in js

// property
let numbers = [1,2,4,5,6,7,9]
let result = numbers.length
console.log(result)

// METHODS
- push() => adds new character to the end of the array.
mehmonlar.push('davlatbek');
- pop() => removes 1 character from the end of the array.
- concat() => adds 2 array each other
- unshift('zolim'); // boshiga qo'shish
-    mehmonlar.shift();   // Birinchi elementni o'chirish
result = mehmonlar.concat(numbers)

// Null and Undefined
- Undefined - a variable without any value.
- null - in math it could be 0 (numeber) / in forms it means its free (empty).
// we can see undefined when our variable is empty (let car;)
// in const variables you cant skip empty variable. (const car = undefined;)
-_-_-_-_-_-_-_-

// Boolean && Comparisons
- true && false
- methods which returns Boolean

let email = 'john123doe@gmail.com'
let result = email.includes('@')

let name = 'teamit'
console.log(name == 'teamit') // true

- == / != /


// type conversion

- console.log(typeof variable)
- automatic type conversions 'hello' + 3 => 'hello3'

let smth  = '100'
let smb = 313
smth = Number(smth)
smb = String(smb)
console.log(smth + 1)

// work shop (prompt)
- when smb enters the name 1st letter should be big others little.
let name = prompt('enter your name ')
let stLetter = name.charAt().toUpperCase()
let theRest = name.slice(1).toLowerCase()
let result = stLetter + theRest
alert(`salom ${result}`)

// FOR LOOP

for(let i = 0; i < 10; i++){
    console.log('name')
}

(if we delete i++, it means infinite loop)

-_-_-_-_-_-_-_-

const fruits = ['banana', 'kivi', 'apple']

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase())
    console.log(`men sevimli meyvam ${fruits[i]}`);
}

-_-_-_-_-_-_-_-

let a = prompt("Enter a number");
console.log(typeof a);
let sum = 0;
for (let i = 0; i < a.length; i++) {
    let b = parseInt(a[i]);
    sum+=b;

}
console.log(sum);
-_-_-_-_-_-_-_-

let num = document.getElementById("sum");
let a = prompt("Enter a number");
console.log(typeof a);
let sum = 0;
for (let i = 0; i < a.length; i++) {
    let b = parseInt(a[i]);
    sum+=b;

}

console.log(sum);
num.textContent = sum;
-_-_-_-_-_-_-_-
// WHILE LOOP
let i = 0
while (i < fruits.length;){
    console.log(fruits[i].toUpperCase())
    i++
}
(if we delete i++, it means infinite loop)

// DO WHILE

let i = 0

do {
    console.log(i)
    i++
}while(i < 5)

(do while 1st logs data then checks but while it seft 1st checks)


// IF / ELSE

const age = 20
if (age > 20){
    console.log('siz 20 dan kattasiz')
}
-_-_-_-_-_-_-_-

const mehmonlar = ['aziz','farrux','jafar', 'alovuddin']
if (mehmonlar.length > 4) {
    console.log('yetarlicha mehmonlar kelishibdi')
}else{
    console.log('demak holi kam')
}
-_-_-_-_-_-_-_-

let password = 'parol123'

if (password.length >= 12){
    console.log('parol yetarlicha uzun')
}else if ( >= 8){
    console.log('sizning paralongiz yetarlicha kuchli')
}else{
    console.log('sizning paralongiz yetarlicha kuchli emas!')
}

-_-_-_-_-_-_-_-

// logic operators - OR || and AND &&
// guard operator => &&
// ( ||  or it could be said like default operator)

const parol = 'password@123'

if (parol.length >= 12 && parol.includes('@')){
    console.log('sizning parolingiz juda uzun!')
}else if (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)){
    console.log('sizning parolingiz yetarlicha kuchli)
}else{
    console.log('sizning paralongiz kuchli emas')
}

-_-_-_-_-_-_-_-

BREAKE AND CONTINUE

-break stops the loop. and continue skips the part of the interation.
-_-_-_-_-_-_-_-

let counter = [30, 43, 0, 65, 100, 20, 11]

for (let i = 0; i< counter.length; i++;){
    if (conter[i] === 0){
        continue
    }
    console.log('your count is:' counter[i])

    if(natijalar[i] === 100){
        console.log('Siz eng yuqori natijani topladingiz')
        break
    }
}
-_-_-_-_-_-_-_-

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

-_-_-_-_-_-_-_-

const transactions = [
  { id: 1, amount: 100, status: 'completed' },
  { id: 2, amount: 50, status: 'pending' },
  { id: 3, amount: 200, status: 'completed' },
  { id: 4, amount: 75, status: 'failed' }
];

let totalCompletedAmount = 0;

for (const transaction of transactions) {
  // Skip any non-completed transactions
  if (transaction.status !== 'completed') {
    continue;
  }

  // This code only runs for completed transactions
  totalCompletedAmount += transaction.amount;
}

console.log(totalCompletedAmount); // 300

-_-_-_-_-_-_-_-

// SWICH CASE

const grade = "A"
swich (grade){
    case "A":
        console.log('good')
    case "B":
        console.log('normal')
    case "C":
        console.log('bad')
    default:
        console.log('occured error')
}

-_-_-_-_-_-_-_-
// BLOCK SCOPE

let age = 24

if(true){
    let age = 25
    let name = 'maroof'
    console.log('block scope data: ',age,name)
}
console.log('glabal scope data:',age,name)

_qachonki glabal scopeda data bop blockda bolmasa global hamma joyda ishlatiladi.Agar localda ham globalda ham data bo'lsa local tashqariga chiqmaydi.Agar data faqar localda bolsa error beradi, localdan elon qilingan globalga chiqmaydi.



// scopes help us to avoid naming errors.


// it will be better if choose verbs in func names. like ( pickComputerMove() )

// return code should be the last code, because after it func doesnt get any codes. It will end the function.

-_-_-_-_-_-_-_-
FUNCTION

1) function decloration

function sayHello(){
    console.log('hello')
}
sayHello()

2) function expression

const sayBye = function(){
    console.log('hello')
}

sayBye()

3) arrow function

const sayGood = () => {
    console.log('its arrow function')
}

sayGood()

// argument parametr
-Agar parametr berilib argument berilmasa undefined chiaqadi shu uchun default value berilishi kk. (Bu holda ='kech' default qiymat)

cosnt sayHello = function(name, day ='kech'){   // parametr
    console.log(`Hello ${name} ${day}`)
}

sayHello('Jonbek', 'tong')  // argument
-_-_-_-_-_-_-_-
USING RETURN IN FUNCTIONS

const calcArea = function(radius){
    return 3.14 * radius ** 2   // in js we use return when we want to get data outside the function
}

const a = calcArea(5)
-_-_-_-_-_-_-_-

ARROW FUNCTION

1)const calcArea = radius => 3.14 * radius ** 2

const area = calcArea(5)
console.log(area)

2)const greet = (ism, familiya) => {
    return `Hello ${ism} ${familiya}`
}

const result = greet ('Danil', 'Sultanov')
console.log(result)

3) const bill = (products, tax ) => {
    let total = 0
    for (let i=0; i < product.length; i++ ){
        total += products[i] + products[i] + tax
    }
    return total
}

const result = bill ([10, 13, 45], 0.2)
consoole.log(result)

-_-_-_-_-_-_-_-

FUNCTIONS VS METHODS

-function'lar yolg'iz kelishi mmkn. ammon method'lar qaysidr data type ga bog'lanib keladi.

-_-_-_-_-_-_-_-

CALLBACK FUNCTION

-Function'ning argumentiga berilgan functionga CALLBACK function deyiladi.

const myFunc=(callbackFunc)=>{
    let number = 50
    callbackFunc(number)
}

myFunc(function(value){
    console.log(value)
})

or

myFunc((value)=>{
    console.log(value)
})

-_-_-_-_-_-_-_-
FOR EACH METHOD

-this method used for arrays.

const ismlar= ['ahror','sardor','doniyor','bekzod']
const newIsmlar = []

ismlar.forEach(function(ism,index){
    const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
    newIsmlar.push(newIsm)
})
console.log(newIsmlar)
// By default, the forEach method provides an index parameter, but it's often skipped because we usually don't need it.

// in js there are many ways to access to objects one of them "dot notation".
// In JavaScript, you can access object properties in two main ways: dot notation and bracket notation.

const product = {
    name: 'apple'
}

OBJECTS

const user = {
    name: 'maroof',
    age: 24,
    isCar: false,
    languages: ["russian", "uzbek", "english"],
    location: "Bukhara"
}

console.log(user)
console.log(user.age)

user.age = 25
console.log(user.age)

console.log(user.name) // this is dot notation.

// And 2nd one is bracket notation ['object-key'].
console.log(user['name']) // this is bracket notation.
// The advantage of bracket notation is that it can access keys that dot notation can't (like keys with spaces or special characters).

ADDING METHODS IN OBJ

const user = {
    name: 'maroof',
    age: 24,
    isCar: false,
    languages: ["russian", "uzbek", "english"],
    location: "Bukhara",
    login: function(){
        console.log('you logged in')
    }
}

user.login() // calling obj method

// When defining methods inside objects, avoid using arrow functions if you need to use 'this'. Arrow functions do not have their own 'this' binding.

THIS

// In the global scope, 'this' refers to the window object (in browsers).

console.log(this)

OBJECTS IN ARRAY

const movies = [
    {name: "Avatar", likes: 456},
    {name: "Harry Potter", likes: 567},
    {name: "Titanic", likes: 156},
    {name: "Sherkoc holmes", likes: 432}
]

movies.forEach((movie)=>{
    const result = `Kino nomi ${movie.name} like'lar soni ${movie.likes}`
    console.log(result)
})

MATH OBJECT

console.log(Math)
console.log(Math.E)
console.log(Math.PI)

const area1 = 7.9
console.log(Math.round(area1)) // 8

const area2 = 7.1
console.log(Math.round(area2)) //7
//sonning eng yaqin butun qismiga yaxlitlash

|||

console.log(Math.floor(area2)) // 7
-Math.floor means round  down

|||

console.log(Math.ceil(area2)) // 8
-Math.ceil means round up

|||

console.log(Math.trunc(area2)) // 7
- Math.trunc faqat butun qismini op qoladi. (7.3 => 7 / 8.4 => 8)

|||

Math.random() - 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi

const randomNumber = Math.trunc(Math.random() * 10) + 1
console.log(randomNumber)

DOM - document object model - it means all codes which is wrapped in one object.

!!! if I call 'document' in console, I can see whale html code of website.

|||

// --- Music Player ---
const tracks = [
  { id: 1, title: "Song A", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
  { id: 2, title: "Song B", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
];

const rootEl = document.getElementById('root');

// Music Player Header
const musicHeaderEl = document.createElement('h1');
musicHeaderEl.textContent = 'My Music Player';
rootEl.appendChild(musicHeaderEl);

// Music List
const musicListEl = document.createElement('ul');
tracks.forEach(track => {
  const itemEl = document.createElement('li');
  itemEl.textContent = track.title;

  const audioEl = document.createElement('audio');
  audioEl.controls = true;
  audioEl.src = track.url;
  itemEl.appendChild(audioEl);

  musicListEl.appendChild(itemEl);
});
rootEl.appendChild(musicListEl);

// --- To-Do List ---
const tasks = [
  { title: "Купить продукты на неделю", isDone: false },
  { title: "Полить цветы", isDone: true },
  { title: "Сходить на тренировку", isDone: false },
];

// To-Do List Header
const todoHeaderEl = document.createElement('h1');
todoHeaderEl.textContent = "Список дел";
rootEl.appendChild(todoHeaderEl);

// To-Do List
const todoListEl = document.createElement('ul');
tasks.forEach(task => {
  const itemEl = document.createElement('li');
  itemEl.textContent = task.title;

  const coverInputEl = document.createElement('input');
  coverInputEl.type = 'checkbox';
  coverInputEl.checked = task.isDone;
  itemEl.prepend(coverInputEl);

  todoListEl.appendChild(itemEl);
});
rootEl.appendChild(todoListEl);

// --- IGNORE ---
// In your HTML file, ensure you have a div with id 'root':
// <div id="root"></div>
// --- IGNORE ---


|||
// --- Map ---
const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map((number) => {
  return number * 2;
});

console.log(newArray);
// Output: [2, 4, 6, 8, 10]

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map((number) => {
  return { value: number * 2 };
});

console.log(newArray);
// Output: [ { value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }, { value: 10 } ]
// Here, each element in the new array is an object with a value property.


const words = ['spray', 'limit', 'elite', 'exuberant'];
const wordsInfo = words.map((word) => {
  return { word: word, length: word.length };

});

console.log(wordsInfo);
// Output: [ { word: 'spray', length: 5 },
//           { word: 'limit', length: 5 },
//           { word: 'elite', length: 5 },
//           { word: 'exuberant', length: 9 } ]

// Here, each element in the new array is an object containing the original word and its length.

const words = ['spray', 'limit', 'elite', 'exuberant'];
const wordsInfo = words.map((word, index, array) => {
  return {id:index+1, word: word, length: word.length };
});

console.log(wordsInfo);
// Output:
// [
//   { id: 1, word: 'spray', length: 5 },
//   { id: 2, word: 'limit', length: 5 },
//   { id: 3, word: 'elite', length: 5 },
//   { id: 4, word: 'exuberant', length: 9 }
// ]
// Here, each element in the new array is an object containing an id (based on the index), the original word, and its length.










|||
JSON => javascript object notation
its similar with js object but it doesnt support single quote ('') and functions.

// JSON (JavaScript Object Notation) is a text format for storing and exchanging data.
// It is similar to JavaScript objects, but only supports double quotes for keys and string values, and does not support functions or comments.

JSON.stringify(parametr) // Converts a JS object to a JSON string
JSON.parse(parametr)     // Converts a JSON string to a JS object

localStorage - only supports string.

localStorage.setItem("message", "hello"); // Store data
console.log(localStorage.getItem("message")); // Retrieve data
localStorage.removeItem("message"); // Remove data
