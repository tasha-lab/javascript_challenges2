//1. Sum of Positive

function sumOfPositives(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      sum = sum + values[i];
    }
  }
  console.log(sum);
}
sumOfPositives([-10, -12, 2, -1]);

//2. Find Maximum Value
const findMax = (arry) => {
  const max = arry.reduce((firstnum, currentnum) => {
    if (currentnum > firstnum) {
      return currentnum;
    } else {
      return firstnum;
    }
  });
  console.log(max);
};

findMax([-2, -4, 9]);

//3. Election winner
function findWinner(candidates) {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  console.log(winner);
}

const candidates = [
  { name: "Tasha", votes: 50 },
  { name: "Baby", votes: 190 },
  { name: "mama baby", votes: 265 },
];

findWinner(candidates);

//4. Longest word

function findLongestWord(arr) {
  const result = arr.reduce((current, word) => {
    if (word.length > current.length) {
      return word;
    } else return current;
  });
  console.log(result);
}
findLongestWord(["apple", "banana", "pear", "grapefruit"]);
findLongestWord(["Annpatrice", "Natasha", "Abdifatah", "Charity"]);

//5. Count Properties
function countProperties(object) {
  let properties = Object.keys(object);
  console.log(properties.length)
}
countProperties({ name: "Alice", age: 25, city: "Paris" }) // returns: 3
countProperties({ name: "Alice", age: 25, city: "Paris", lastname: "wanjiku", })

//6. Filter by Length
function filterByLength(arr, minlength) {
  const result = arr.filter((word) => {
    if (word.length >= minlength) {
      return word;
    }
  });
  console.log(result);
}
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);
filterByLength(["Wanjiku", "Mohamed", "Jamal", "King'ori"], 7);

//7. Sum of Even Numbers
function sumEvenNumbers(arr) {
  let result = 0;
  const evenNum = arr.filter((number) => {
    if (number % 2 === 0) {
      return number;
    }
  });
  for (let i = 0; i < evenNum.length; i++) {
    result = result + evenNum[i];
  }
  console.log(result);
}
sumEvenNumbers([2, 4, 7, 5]);

// // 9. Count Truthy
// function countTruthy(){

// }

//10. Average of Numbers
function average(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((current, num) => {
    return current + num;
  });
  return sum / arr.length;
}
console.log(average([10, 10, 10]));
console.log(average([]));
console.log(average([7, 9, 8, 5]));

//11. Linear Search
function linearSearch(numbers, nos) {
  const number = numbers.find((number) => number == nos);
  const index = numbers.indexOf(number);
  if (index) {
    console.log(index - 1);
  } else return -1;
}

linearSearch([5, 3, 7, 1, 4], 5);
linearSearch([15, 10, 5, 20, 22], 5);
linearSearch([5, 3, 1, 4], 7);

//12. Reverse Linear Search
function reverseLinearSearch(arr, num){
  // let lastOccurrence= arr.length - 1
  for (let i= arr.length -1;i>=0;i--){
    if(arr[i]==num){
      return i
    }
 }
 return -1

}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([1, 2,3,4,5],10))
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 0))

//13. Linear Search All Indices
function linearSearchAll(arr, num){
  const match=[]
  for(let i=0;i<arr.length;i++){
      if(arr[i]===num){
          match.push(i)
      }
      
  }
  return match;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 0))
console.log(linearSearchAll([5, 3, 7, 1, 44, 72], 20))

