// 7+2
console.log(typeof "This is");

const str = " This is a test string. ";

console.log(`hello "${str}" length`);

// string methods
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("test"));
console.log(str.indexOf("a"));
console.log(str.slice(10, 14));
console.log(str.replace("test", "sample"));
console.log(str);
console.log(str.split(" "));
console.log(str.trim());
console.log(str.charAt(9));
console.log(str.startsWith("This"));
console.log(str.endsWith("string."));
console.log(str.repeat(2));
console.log(str.concat(" Let's add more text."));
console.log(str.search("a test"));
console.log(str.trim().split(""));
console.log(str.split("").indexOf("t"));

// number methods
const num = 42.56789;
console.log(num.toFixed(2));
console.log(num.toPrecision(4));
console.log(Number.isInteger(num));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.sqrt(num));
console.log(Math.pow(num, 2));
console.log(Math.max(10, 20, num));
console.log(Math.min(10, 20, num));
console.log(Math.random() * 100);
console.log(parseInt("123abc"));
console.log(parseFloat("123.45xyz"));
console.log(num.toString());
console.log(Number("56.78"));
console.log(isNaN("abc"));

// boolean methods
const bool = true;

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

