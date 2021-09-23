let x = -89;
let result;

if (x % 3 == 0 && x % 5 === 0) {
  result = "fizzbuzz";
  console.log(result);

} else if (x % 3 == 0) {
  result = "fizz";
  console.log(result);
} else if (x % 5 === 0) {
  result = "buzz";
  console.log(result);
} else {
  result = x;
  console.log(result);
}

//Part 2

let max = "125";
let result;
for (let i = 1; i <= max; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    result = "fizzbuzz";
  }
  else if (i % 3 == 0) {
    result = "fizz";
  }
  else if (i % 5 == 0) {
    result = "buzz";
  }
  else if (i % 3 != 0 || i % 5 != 0) {
    result = i;
  }
  console.log(result);
}