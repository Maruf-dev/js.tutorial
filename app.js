// const myFunc =(callbackFunc)=>{
//     let number = 50
//     callbackFunc(number)
// }

// myFunc(function(value){
//     console.log(value)
// })
// const ismlar= ['ahror','sardor','doniyor','bekzod']

// const newIsmlar = []

// ismlar.forEach(function(ism){
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//     newIsmlar.push(newIsm)
// })

// console.log(newIsmlar)

// const ismlar = {
//     name: 'Ahrorbek',
//     age: 20,
//     profession: 'Developer',
//     car: 'Tesla',
//     location: 'Tashkent',
// }

// console.log(ismlar);


// const user = {
//     name: 'maroof',
//     age: 24,
//     isCar: false,
//     languages:["russian","uzbek","english"],
//     location: "Bukhara",
//     login: function(){
//         console.log('you logged in')
//     },
//     speak:function(){
//         console.log("I can speak:")
//         this.languages.forEach((lang) =>{
//             console.log(lang)
//         })
//     },
//     movies:[
//     {name: "Avatar", likes: 456},
//     {name: "Harry Potter", likes: 567},
//     {name: "Titanic", likes: 156},
//     {name: "Sherkoc holmes", likes: 432}],

//     //inside the obj we dont use arrow function if we use it returns global window Object
//     // speak: ()=>{
//     //     console.log(this)
//     // },
//     watchMovie: function(){
//         this.movies.forEach((movie) => {
//             console.log(`Name: ${movie.name}, Likes: ${movie.likes}`)
//         })
//     }

// }

// user.watchMovie()


const list = [[1,2,3], false, 4, [1,2,3],'hello',];
const newList = [];

list.forEach((item)=>{
  const res = Array.isArray(item)
  if (res){
    item.forEach((number)=>{
      newList.push(number)
    })
  }
})

console.log(newList);
