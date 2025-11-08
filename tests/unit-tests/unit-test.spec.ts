import { test, expect, Page } from "@playwright/test";

import { checkTime, checkTestPass } from "./unit-functions";

// checkTime(page, 4);
// checkTime(page, "r");
// checkTime(page, 15);
// checkTime(page, 100);
// checkTime(page, -1);
// Класи еквівалентності
// positive
// negative
// zero
// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність

// Check time
// test("If time < 0 hours should return Невірно вказаний час", () => {
//   const result = checkTime(-1);
//   expect(result).toBe("Невірно вказаний час");
// });
// test("25 hours should return Невірно вказаний час", () => {
//   const result = checkTime(25);
//   expect(result).toBe("Невірно вказаний час");
// });
// test("If time 'string' hours should return Це не числове значення", () => {
//   const result = checkTime("string");
//   expect(result).toBe("Це не числове значення");
// });

// test("If time 'boolean-true' hours should return Це не числове значення", () => {
//   const result = checkTime(true);
//   expect(result).toBe("Це не числове значення");
// });
// test("If time 'boolean-false' hours should return Це не числове значення", () => {
//   const result = checkTime(false);
//   expect(result).toBe("Це не числове значення");
// });

// test("5 hours should return Доброго ранку!", () => {
//   const result = checkTime(5);
//   expect(result).toBe("Доброго ранку!");
// });
// test("10 hours should return Доброго ранку!", () => {
//   const result = checkTime(10);
//   expect(result).toBe("Доброго ранку!");
// });

// test("11 hours should return Доброго ранку!", () => {
//   const result = checkTime(11);
//   expect(result).toBe("Доброго ранку!");
// });

// test("12 hours should return Доброго дня!", () => {
//   const result = checkTime(12);
//   expect(result).toBe("Доброго дня!");
// });
// test("13 hours should return Доброго дня!", () => {
//   const result = checkTime(13);
//   expect(result).toBe("Доброго дня!");
// });
// test("15 hours should return Доброго дня!", () => {
//   const result = checkTime(15);
//   expect(result).toBe("Доброго дня!");
// });
// test("16 hours should return Доброго дня!", () => {
//   const result = checkTime(16);
//   expect(result).toBe("Доброго дня!");
// });
// test("17 hours should return Доброго вечора", () => {
//   const result = checkTime(17);
//   expect(result).toBe("Доброго вечора!");
// });
// test("20 hours should return Доброго вечора", () => {
//   const result = checkTime(20);
//   expect(result).toBe("Доброго вечора!");
// });

// test("21 hours should return Доброго вечора!", () => {
//   const result = checkTime(21);
//   expect(result).toBe("Доброго вечора!");
// });

// test("1 hours should return Доброї ночі!", () => {
//   const result = checkTime(1);
//   expect(result).toBe("Доброї ночі!");
// });
// test("4 hours should return Доброї ночі!", () => {
//   const result = checkTime(4);
//   expect(result).toBe("Доброї ночі!");
// });

// Check pass exam
// if (typeof score !== "number") {      ---- string, NAN, undefined
//   return "Це не числове значення!";
// } else if (score < 0 || score > 200) {    ----- -1, -23232312123.1231323
//   return "Число повинно бути в діапазоні 0 - 200";
// } else if (score >= 0 && score < 50) { ----- 0, 1, 35, 49
//   return "Тест не складено";
// } else if (score >= 50) {              ---- 50, 51, 32323232323
//   return "Тест складено";
// }

test("String should return 'Це не числове значення!'", () => {
  const result = checkTestPass("4ddswcx");
  expect(result).toBe("Це не числове значення!");
});
// test("NAN should return 'Це не числове значення!'", () => {
//   const result = checkTestPass(NAN);
//   expect(result).toBe("Це не числове значення!");
// });
test("Undefined should return 'Це не числове значення!'", () => {
  const result = checkTestPass(undefined);
  expect(result).toBe("Це не числове значення!");
});
test("-1  should return 'Число повинно бути в діапазоні 0 - 200'", () => {
  const result = checkTestPass(-1);
  expect(result).toBe("Число повинно бути в діапазоні 0 - 200");
});
test("-23232312123.1231323  should return 'Число повинно бути в діапазоні 0 - 200'", () => {
  const result = checkTestPass(-23232312123.1231323);
  expect(result).toBe("Число повинно бути в діапазоні 0 - 200");
});
test("201  should return 'Число повинно бути в діапазоні 0 - 200", () => {
  const result = checkTestPass(201);
  expect(result).toBe("Число повинно бути в діапазоні 0 - 200");
});
test("0  should return 'Тест не складено", () => {
  const result = checkTestPass(0);
  expect(result).toBe("Тест не складено");
});
test("1  should return 'Тест не складено", () => {
  const result = checkTestPass(1);
  expect(result).toBe("Тест не складено");
});
test("35  should return 'Тест не складено", () => {
  const result = checkTestPass(35);
  expect(result).toBe("Тест не складено");
});
test("49  should return 'Тест не складено", () => {
  const result = checkTestPass(49);
  expect(result).toBe("Тест не складено");
});
test("50  should return 'Тест складено", () => {
  const result = checkTestPass(50);
  expect(result).toBe("Тест складено");
});
test("51  should return 'Тест складено", () => {
  const result = checkTestPass(51);
  expect(result).toBe("Тест складено");
});
test("199  should return 'Тест складено", () => {
  const result = checkTestPass(199);
  expect(result).toBe("Тест складено");
});
test("200  should return 'Тест складено", () => {
  const result = checkTestPass(200);
  expect(result).toBe("Тест складено");
});
