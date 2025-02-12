<!-- lesson plan -->
- alert() | confirm()
- document.body.innerHTML = 'hello'

- variable
- str => '...' or "..."
<!-- ahror web -->
- numbers
in js all numbers are number. there no differens beetween 1 or 3.5. they all are same.
 math operators +,-,*,/, **, %
-explain updating data with a method of likes. (like there was 10 likes and smbd liked and its now 11 likes)
NaN => 5 / 'salom'
// math in js
Math.round(2.8) => 3 // yaxlitlash

//
- most used str methods
''.toUpperCase() / .toLowerCase() / var.lastIndexOf('a') / var.indexOf('a')
var.slice(0,4) => cuts via indexs / slice(4) => stars form 4th index.
var.substr(4,10) => 4 dan kn yana 10 ta index qo'shib hisoblaydi.
var.replace('a', 'd') => 1-a ni o'zgartiradi.
var.charAt() => only takes first character from str.
var.trim() => it removes white spaces from str.
var.split('a') => it creates an array it takes as a target "a" letter and removes it.


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


















=====
// google dev tool ni ishlataykon payt (console) paste qilishga ruxsat bermasa console'ga 'allow pasting' deb yozish kk
====
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

JSON => javascript object notation
its similar with js object but it doesnt support single quote ('') and functions.

JSON.stringify(parametr) => console.log(JSON.stringify(parametr)) makes object to str

JSON.pasre(parametr) => console.log(JSON.pasre(parametr)) makes str to object
====

localStorage - only supports string.

localStorage.setItem("message", "hello"); => entering data into localStorage. $$ intead of message you can shoose any word.
localStorage.getItem("message") => console.log(localStorage.getItem); getting data out of localStorage.
localStorage.removeItem("message") .
// 5:08
