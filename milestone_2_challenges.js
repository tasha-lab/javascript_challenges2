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
function countProperties() {}

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
