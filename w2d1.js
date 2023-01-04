// function d6(){
//   var roll = Math.floor(Math.random() * 6) + 1
//   //should return 1,2,3,4,5, or 6
//   return roll;
// }

// var playerRoll = d6();
// console.log(`The player rolled a ${playerRoll}!!`);

// //write a bit of code to randomly print an option from the following array
// var lifesAnswers = [
//   "It is certain.",
//   "It is decidedly so.",
//   "Without a doubt.",
//   "Yes - definitely.",
//   "You may rely on it.",
//   "As I see it, yes.",
//   "Most likely.",
//   "Outlook good.",
//   "Yes.",
//   "Signs point to yes.",
//   "Reply hazy, try again.",
//   "Ask again later.",
//   "Better not tell you now.",
//   "Cannot predict now.",
//   "Concentrate and ask again.",
//   "Don't count on it.",
//   "My reply is no.",
//   "My sources say no.",
//   "Outlook not so good.",
//   "Very doubtful."
// ];

// function getAnswer(arr){
//   let index = Math.floor(Math.random() * arr.length)
//   console.log(arr[index])
// }


// getAnswer(lifesAnswers)

// function getAnswer(arr){
//   let index = Math.floor(Math.random() * arr.length)
//   console.log(arr[index])
// }

// var length = lifesAnswers.length;
// var randomSentence = Math.floor(Math.random()*lifesAnswers.length);
// console.log(lifesAnswers[randomSentence])


// var isSunny = false;
// var isRaining = true;
    
// if(isSunny) {
//     console.log("Wear sunscreen");
// }
    
// if(isRaining) {
//     console.log("Bring an umbrella");
// }

// var today = new Date();
// if(today.getDay() == 1) {
//     console.log("I hate Mondays!");
// } else {
//     console.log("Today is alright!");
// }

// var today = new Date();
// if(today.getDay() == 1) {
//     console.log("I hate Mondays!");
// } else if(today.getDay() == 5) {
//     console.log("Friday? More like Fri-yay!");
// } else {
//     console.log("Today is alright!");
// }


var temperature = 60; // let's assume this is degrees Fahrenheit
var isRaining = false;
    
if(temperature >= 50) {
    if(!isRaining) {
        console.log("This is a good day to go for a walk!");
    }
}


var temperature = 60; // let's assume this is degrees Fahrenheit
var isRaining = false;
    
if(temperature >= 50 && !isRaining) {
    console.log("This is a good day to go for a walk!");
}



