// fetch = Function used for making HTTP requests to fech resources from a server.
//    (JSON style data, images, files, etc)
//    Simplifies asynchronous data fetching in Javascript and used for interacting with APIs
//    to retrieve or send data.
//    data asynchronously over the web.

//    syntax: fetch(url, {options})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error ("Could not fetch data from the API");
//     }
//     return response.json();
//   })
//   .then( data => {
//     console.log(data);
//   })
//   .catch(error => console.error(error));


async function fetchPikachu() {
  try{
    const pokemonName = document.getElementById("input").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error ("Could not fetch data from the API");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgEl = document.getElementById("sprite");
    imgEl.src = pokemonSprite;
    imgEl.style.display = "block";
  }
  catch(error){
    console.error(error);
  }
}