// 1. Парне чи непарне число
// Напишіть програму, яка визначає, чи число парне або непарне.
// Вхід: Число (наприклад, 4)
// Вихід:
// - "Число парне."
// - "Число непарне."

const number = 100;
if (typeof number !== "number") {
  console.log("Це не числове значення");
} else if (number % 2 == 0) {
  console.log("Число парне.");
} else console.log("Число непарне.");

// Unit-tests
function checkNumberType(number) {
  if (typeof number !== "number") {
    return "Це не числове значення";
  } else if (number % 2 === 0) {
    return "Число парне.";
  } else {
    return "Число непарне.";
  }
}

// 2. Привітання за часом
// Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
// Вхід: Година (наприклад, 15)
// Вихід:
// - Якщо год < 12: "Доброго ранку!"
// - Якщо год 12–18: "Доброго дня!"
// - Якщо год > 18: "Доброго вечора!"

const time = 4;
// 4-11 - ранок
// 12 - 16 - день
// 17-21 - вечір
// 22 - 5 - ніч
if (typeof time !== "number") {
  console.log("Це не числове значення");
} else if (time < 0 || time > 24) {
  console.log("Невірно вказаний час");
} else if (time > 4 && time <= 11) {
  console.log("Доброго ранку!");
} else if (time > 11 && time <= 16) {
  console.log("Доброго дня!");
} else if (time > 16 && time <= 21) {
  console.log("Доброго вечора!");
} else console.log("Доброї ночі!");

// 3. Перевірка оцінки
// Якщо бал >= 50 — "Тест складено".
// Якщо < 50 — "Тест не складено".
// Вхід: Бал (наприклад, 42)

const score = 55;
if (typeof score !== "number") {
  console.log("Це не числове значення!");
} else if (score < 0) {
  console.log("Ви ввели від'ємне число");
} else if (score >= 0 && score < 50) {
  console.log("Тест не складено");
} else if (score >= 50) {
  console.log("Тест складено");
}

// 4. Вік для голосування
// Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
// Вхід: Вік (наприклад, 17)
// Вихід:
// - Якщо >= 18: "Ви можете голосувати."
// - Інакше: "Ви ще не можете голосувати."

const ageForVoting = 184;
if (typeof ageForVoting !== "number") {
  console.log("Це не числове значення!");
} else if (ageForVoting < 0) {
  console.log("Ви ввели від'ємне число");
} else if (ageForVoting >= 18 && ageForVoting < 120) {
  console.log("Ви можете голосувати.");
} else if (ageForVoting >= 120) {
  console.log("Ви ВЖЕ не можете голосувати");
} else console.log("Ви ЩЕ не можете голосувати.");

// 5. Порівняння чисел
// Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
// Вхід: Два числа (наприклад, 8 і 10)
// Вихід:
// - "Перше число більше."
// - "Друге число більше."
// - "Числа рівні."

const number1 = 5;
const number2 = 5;
if (number2 < number1) {
  console.log("Перше число більше.");
} else if (number2 > number1) {
  console.log("Друге число більше.");
} else console.log("Числа рівні.");

// 6. Дорога і світлофор
// Якщо зелений — переходьте.
// Якщо жовтий — підготуйтеся.
// Якщо червоний — зачекайте.
// Вхід: Колір світлофора (наприклад, "жовтий")

const greenColor = "green";
const yellowColor = "yellow";
const redColor = "red";

//const signal = greenColor;
//const signal = yellowColor;
const signal = redColor;
// const signal = 'redColor';

if (signal == greenColor) {
  console.log("GO");
} else if (signal == yellowColor) {
  console.log("READY");
} else if (signal == redColor) {
  console.log("STOP");
} else console.log("Unknown color");

// 7. Визначення типу числа
// Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
// Вхід: Число (наприклад, -5)
// Вихід:
// - "Число додатнє."
// - "Число від’ємне."
// - "Число дорівнює нулю."

const number3 = -8;
if (typeof number3 !== "number") {
  console.log("Це не число!");
} else if (number3 == 0) {
  console.log("Число дорівнює нулю.");
} else if (number3 < 0) {
  console.log("Число від’ємне.");
} else console.log("Число додатне");

// ⛏ просунутий рівень
// Написати 1, 2 та 4 програми Unit тести => приклад виконання
