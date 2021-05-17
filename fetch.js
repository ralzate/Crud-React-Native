const fetch = require('node-fetch');

const getPokeByName = async(pokeName) => {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await result.json()
    // Filter function
    const poke = data.results.filter(poke => poke.name === pokeName)
    // const names = data.results.map(poke => poke.name)
    return poke
  } catch(error){
    console.log(error)
  }
}

const result = getPokeByName("metapod").then(answer => console.log(answer))
