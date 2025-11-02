//console.log("Hi there!");

let age = 5;
if (age == 18) {
  console.log(age);
  console.log("I Can Enter");
}

if (age >= 21) {
  console.log("you can drink");
} else console.log("NO Drink");

if (age < 18) {
  console.log("Go HOME");
}

let score = -4;
if (score >= 75) {
  console.log("Passed");
} else if (score < 75 && score > 0) {
  console.log("Not passed");
} else console.log("wrong number");

const studentScore = 75;

if (typeof studentScore !== "number") {
  throw new Error("Invalid score: not a valid number");
} else if (studentScore < 0 || studentScore > 100) {
  console.log("Invalid score: should be between 0 and 100");
} else if (studentScore >= 75) {
  console.log("Здав");
} else {
  console.log("Не здав");
}

// for

for (let i = 0; i < 10; i += 1) {
  console.log("this is" + "-" + i);
}

let i = 10;
while (i < 10) {
  console.log("OK" + "-" + i);
  i++;
}

//do while

do {
  console.log(i);
  i++;
  console.log(i);
} while (i < 10);

[15, 26, 32, 45, 56, 63, 37].forEach((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

const arr = [15, 26, 32, 45, 56, 63, 37];

for (const element of arr) {
  console.log(element);
}
