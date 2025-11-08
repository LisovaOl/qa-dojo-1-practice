import { Page } from "@playwright/test";

export function checkTime(time: number) {
  if (typeof time !== "number") {
    return "Це не числове значення";
  } else if (time < 0 || time > 24) {
    return "Невірно вказаний час";
  } else if (time > 4 && time <= 11) {
    return "Доброго ранку!";
  } else if (time > 11 && time <= 16) {
    return "Доброго дня!";
  } else if (time > 16 && time <= 21) {
    return "Доброго вечора!";
  } else if (time <= 4 || time > 21) {
    return "Доброї ночі!";
  }
}

export function checkTestPass(score: number) {
  if (typeof score !== "number") {
    return "Це не числове значення!";
  } else if (score < 0 || score > 200) {
    return "Число повинно бути в діапазоні 0 - 200";
  } else if (score >= 0 && score < 50) {
    return "Тест не складено";
  } else if (score >= 50) {
    return "Тест складено";
  }
}
