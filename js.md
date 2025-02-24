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

//array

//before explaining array and objects. there was explanation about what premetive/referance (more complex).
let mehmonlar = ['sarvar','aziz', 'komil']
console.log(mehmonlar[1]) // 'aziz'
mehmonlar[0] = 'ibrohim'

// explanation about property and methods in js

// property
let numbers = [1,2,4,5,6,7,9]
let result = numbers.length
console.log(result)

// methods
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

// for loop

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
// while loop
let i = 0
while (i < fruits.length;){
    console.log(fruits[i].toUpperCase())
    i++
}
(if we delete i++, it means infinite loop)

// do while

let i = 0

do {
    console.log(i)
    i++
}while(i < 5)

(do while 1st logs data then checks but while it seft 1st checks)


// if statements

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

const parol = 'password@123'

if (parol.length >= 12 && parol.includes('@')){
    console.log('sizning parolingiz juda uzun!')
}else if (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)){
    console.log('sizning parolingiz yetarlicha kuchli)
}else{
    console.log('sizning paralongiz kuchli emas')
}

-_-_-_-_-_-_-_-

// break and continue
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

// swich case

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


// we can see undefined when our variable is empty (let car;)
// in const variables you cant skip empty variable. (const car = undefined;)

// guard operator => &&

// scopes help us to avoid naming errors.

// ( ||  or it could be said like default operator)

// it will be better if choose verbs in func names. like ( pickComputerMove() )

// return code should be the last code, because after it func doesnt get any codes. It will end the function.



// in js there are many ways to acceess to objects one of them "dot notation".

const product {
    name: 'apple'
}

console.log(product.name) // this is dot notation.

 And 2nd one is bracket notation ['onbeckt-key'].

console.log(['name']) // this is bracket notation.
 the addvantage of bracket notation, it can call any object keys that dont work in dot notation.

//
-_-_-_-_-_-_-_-
JSON => javascript object notation
its similar with js object but it doesnt support single quote ('') and functions.

JSON.stringify(parametr) => console.log(JSON.stringify(parametr)) makes object to str

JSON.pasre(parametr) => console.log(JSON.pasre(parametr)) makes str to object
-_-_-_-_-_-_-_-

localStorage - only supports string.

localStorage.setItem("message", "hello"); => entering data into localStorage. $$ intead of message you can shoose any word.
localStorage.getItem("message") => console.log(localStorage.getItem); getting data out of localStorage.
localStorage.removeItem("message") .


<!-- cladue code  -->

// 1. Processing API responses - cleaning and normalizing data
const users = apiResponse.map(user => ({
    ...user,
    name: user.name.trim().toLowerCase(),
    email: user.email?.toLowerCase() ?? '',
    tags: user.tags?.split(',').map(tag => tag.trim()) || []
}));

// 2. URL path handling - very common in routing
const isValidRoute = path.startsWith('/api/v1/') &&
                    !path.includes('..');  // security check

// 3. Building query strings - used this countless times
const queryString = Object.entries(params)
    .filter(([_, value]) => value != null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

// 4. Data grouping - think analytics or reporting
const ordersByStatus = orders.reduce((acc, order) => {
    const status = order.status.toLowerCase();
    acc[status] = acc[status] || [];
    acc[status].push(order);
    return acc;
}, {});

// 5. Smart search function - used in autocomplete
const search = (items, query) => {
    const searchTerm = query.toLowerCase().trim();
    return items.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
};

// 6. Processing CSV data - very common in data import features
const parseCSV = (csv) => {
    return csv.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => line.split(',')
            .map(cell => cell.trim())
        );
};

// 7. Unique array with modern syntax - used in tag systems
const uniqueTags = [...new Set(
    items.flatMap(item => item.tags)
        .map(tag => tag.toLowerCase().trim())
)];

// 8. Last N items in a list - like recent activities
const getRecentItems = (items, n = 5) => {
    return items.slice(-n).reverse();
};

// 9. Pagination helper - used in literally every list view
const paginateItems = (items, page = 1, perPage = 10) => {
    return items.slice((page - 1) * perPage, page * perPage);
};

<!--  -->

<!-- 2nd part -->
function formatComments(comments) {
    return comments
        // First, clean up the data
        .map(comment => ({
            ...comment,
            text: comment.text.trim(),
            author: comment.author.toLowerCase(),
            timestamp: new Date(comment.timestamp)
        }))
        // Filter out empty or deleted comments
        .filter(comment =>
            comment.text.length > 0 &&
            !comment.isDeleted
        )
        // Group by date (using reduce)
        .reduce((acc, comment) => {
            const date = comment.timestamp.toDateString();
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(comment);
            return acc;
        }, {})
        // Sort comments within each day
        .map(dayComments =>
            dayComments.sort((a, b) =>
                b.timestamp - a.timestamp
            )
        );
}
<!--  -->