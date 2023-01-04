function divisibleBy3() {
    
  for(var i =0; i < pokemon.length;i++) {
      if(pokemon[i].id % 3 === 0) {
          console.log(pokemon[i])
      }
  }

}

function moreThanOneType() {
  for(var i = 0; i < pokemon.length; i++) {
      if(pokemon[i].types.length > 1) {
          console.log(pokemon[i])
      }
  }
}

function poison() {
  for(var i =0; i < pokemon.length; i++) {
      if(pokemon[i].types[0] === "poison" && pokemon[i].types.length === 1) {
          console.log(pokemon[i])
      }
  }
  // var temp;

  // for(var j = 0; j < pokemon[i].name.length;j++) {
      
  //     temp = pokemon[i].name[j]
  //     pokemon[i].name[j] = pokemon[i].name[pokemon[i].name.length - 1 - i]
  //     pokemon[i].name[pokemon[i].name.length - 1 - i] = temp
  //     console.log(pokemon[i].name)
  // }


}

function firstTypeFlying() {
  for(let i =0; i < pokemon.length; i++) {
      if(pokemon[i].types.length > 1 && pokemon[i].types[1] === "flying") {
          console.log(pokemon[i].types[0])
      }
  }
}


//1. console.log the pokémon objects whose id is evenly divisible by 3
// for(var i = 0; i< pokemon.length; i++){
//     if(pokemon[i].id % 3 === 0){
//         console.log(pokemon[i])
//     }
// }

//2. console.log the pokémon objects that have more than one type
// for(var i = 0; i< pokemon.length; i++){
//     if(pokemon[i].types.length > 1){
//         console.log(pokemon[i])
//     }
// }

//3. console.log the names of the pokémon whose only type is "poison"
// for(var i = 0; i < pokemon.length; i++){
//     if(pokemon[i].types.length === 1){
//         if(pokemon[i].types[0] === "poison"){
//             console.log(pokemon[i])
//         }
//   }
// }

//4. console.log the first type of all the pokémon whose second type is "flying"
// for(var i = 0; i < pokemon.length; i++){
//     if(pokemon[i].types.length === 2){
//         if(pokemon[i].types[1] === "flying"){
//             console.log(pokemon[i].types[0])
//         }
//     }   
// }

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
for(var i = 0; i< pokemon.length; i++){
  if(pokemon[i].types.length === 1 && pokemon[i].types[0] === "poison"){
      var reverse = "";
      for(var j = pokemon[i].name.length - 1; j >= 0; j--){
          reverse += pokemon[i].name[j]
      }
      console.log(reverse)
  }
}