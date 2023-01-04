//a great way to start is by making a loop that prints out each number individually!

function isPresent2d(arr2d,value){
  //search the arr2d and return true if value exists in arr2d

  // if value does not exist in arr2d, then return false
}

var arr2d2 = [
  [2,5,8],
  [3,6,1],
  [5,7,7]
];

console.log(isPresent2d(arr2d2,6));//should return true
console.log(isPresent2d(arr2d2,9));//should return false

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  return flat;
}
  
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]







//a great way to start is by making a loop that prints out each number individually!


function isPresent2d(arr2d,value){
  //search the arr2d and return true if value exists in arr2d
  for(var i=0;i<arr2d.length;i++){
      for(var j=0;j<arr2d[i].length;j++){
          if(arr2d[i][j]===value){
              return true;
          }
      }
  }
  return false;
  // if value does not exist in arr2d, then return false
}

var arr2d2 = [
  [2,5,8],
  [3,6,1],
  [5,7,7]
];
isPresent2d(arr2d2);
console.log(isPresent2d(arr2d2,6));//should return true
console.log(isPresent2d(arr2d2,9));//should return false

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  for(var i=0;i<arr2d.length;i++){
      for(var j=0;j<arr2d[i].length;j++){
          flat.push(arr2d[i][j]);
      }
  }
  return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]










//a great way to start is by making a loop that prints out each number individually!

function isPresent2d(arr2d,value){
  //search the arr2d and return true if value exists in arr2d

  // if value does not exist in arr2d, then return false
}

var arr2d2 = [
  [2,5,8],
  [3,6,1],
  [5,7,7]
];

console.log(isPresent2d(arr2d2,6));//should return true
console.log(isPresent2d(arr2d2,9));//should return false

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  return flat;
}
  
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

dojo_Joseph_Lemay — Today at 11:56 AM
Everyday when we come back from algos my zoom crashes, I'll brb.

Jared_Pisell — Today at 11:57 AM
//a great way to start is by making a loop that prints out each number individually!

function isPresent2d(arr2d, value) {
var moeFlat = flatten(arr2d);

for (let i = 0; i < moeFlat.length; i++) {
  if (moeFlat[i] === value) {
    return true;
  }
}
return false;
}

var arr2d2 = [
[2, 5, 8],
[3, 6, 1],
[5, 7, 7],
];

console.log(isPresent2d(arr2d2, 6)); //should return true
console.log(isPresent2d(arr2d2, 9)); //should return false

// complete the following function
function flatten(arr2d) {
var flat = [];
for (let i = 0; i < arr2d.length; i++) {
  for (let j = 0; j < arr2d[i].length; j++) {
    flat.push(arr2d[i][j]);
  }
}
return flat;
}
//                                         i     j
//                                         ⬇     ⬇
var result = flatten([
[2, 5, 8],
[3, 6, 1],
[5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]