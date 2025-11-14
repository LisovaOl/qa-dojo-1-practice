// // 7+2
// console.log(typeof "This is");

// const str = " This is a test string. ";

// console.log(`hello "${str}" length`);

// // string methods
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes("test"));
// console.log(str.indexOf("a"));
// console.log(str.slice(10, 14));
// console.log(str.replace("test", "sample"));
// console.log(str);
// console.log(str.split(" "));
// console.log(str.trim());
// console.log(str.charAt(9));
// console.log(str.startsWith("This"));
// console.log(str.endsWith("string."));
// console.log(str.repeat(2));
// console.log(str.concat(" Let's add more text."));
// console.log(str.search("a test"));
// console.log(str.trim().split(""));
// console.log(str.split("").indexOf("t"));

// // number methods
// const num = 42.56789;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(4));
// console.log(Number.isInteger(num));
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.sqrt(num));
// console.log(Math.pow(num, 2));
// console.log(Math.max(10, 20, num));
// console.log(Math.min(10, 20, num));
// console.log(Math.random() * 100);
// console.log(parseInt("123abc"));
// console.log(parseFloat("123.45xyz"));
// console.log(num.toString());
// console.log(Number("56.78"));
// console.log(isNaN("abc"));

// // boolean methods
// const bool = true;

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// // array methods
// const arr1 = ["This", "is", "a", "test", "string"];
// console.log(arr1.length);
// console.log(arr1[3]);

// // Методи для пошуку
// console.log(arr1.includes("is"));
// console.log(arr1.includes("are"));
// console.log(arr1.indexOf("is"));
// console.log(arr1.find((el) => el.length > 5));
// console.log(arr1.find((el) => el === "is"));
// console.log(arr1.findIndex((el) => el === "string"));
// console.log(arr1.findIndex((el) => el === "is"));

// // Методи для перебору
// console.log(arr1.map((el) => el.toUpperCase())); ///Створює новий масив
// arr1.forEach((el) => console.log(el)); //Ітерує кожен елемент
// console.log(arr1.filter((el) => el.length > 4)); // Фільтрує елементи
// console.log(arr1.reduce((acc, el) => acc + " " + el)); // Агрегує значення
// const splitCoffee = listOfCoffee.flatMap((text) => text.split(/\s+/));

// // Методи для зміни
// console.log(arr1.push("new")); //Додає в кінець
// console.log(arr1.pop()); //Видаляє з кінця
// console.log(arr1.shift()); //Видаляє з початку
// console.log(arr1.unshift("Start")); //Додає на початок
// console.log(arr1.splice(2, 1, "new")); //Видаляє/додає елементи
// console.log(arr1.reverse()); //Змінює порядок
// console.log(arr1.sort()); //Сортує (за замовчуванням — як рядки)

// //Інші корисні
// console.log(arr1.join(" "));
// console.log(arr1.slice(1, 3));
// console.log(arr1.concat(["extra"]));
// console.log([["a"], ["b"]].flat());

// Object - methods
const espresso = {
  name: "Espresso",
  price: 10,
  recipe: [{ name: "espresso", quantity: 30 }],
};
console.log(espresso.name); //'Espresso'
console.log(espresso.price); // 10
console.log(espresso.recipe); //[ 'name', 'price', 'recipe' ]
console.log(espresso.recipe[0].name); // espresso'
console.log(espresso.recipe[0].quantity); // 30

console.log(Object.keys(espresso)); //[ 'name', 'price', 'recipe' ]
console.log(Object.values(espresso)); //[ 'Espresso', 10, [ {...} ] ]
console.log(Object.entries(espresso)); //[ [ 'name', 'Espresso' ], [ 'price', 10 ], [ 'recipe', [ { name: 'espresso', quantity: 30 } ] ] ]

// Перебір ключів і значень
for (const [key, value] of Object.entries(espresso)) {
  console.log(`${key}: ${value}`);
}
// console.log();
// console.log();
