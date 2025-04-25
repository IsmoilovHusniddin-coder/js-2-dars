//Alisher akani sayohati

// var a = 500;
// var b = 250;
// var c = 120;
// var result1 = a * 11000;
// var result2 = b * 11000;
// var result3 = c * 12354;
// var resultoveral = result1 + result2 + result3;
// var sum = prompt("Hisobingizni kiriting");
// if (sum >= resultoveral) {
//   console.log("Oq yo'l, Alisher ");
// } else if (sum < resultoveral) {
//   console.log("Alisher ozgina sabr qilishi kerak bo'lar ekan");
// }

//ko'p xonali sonlar

// var number = prompt("Sonni kiriting");
// if (number >= 0 && number <= 9) {
//   console.log("Bu bir xonali son");
// } else if (number >= 10 && number <= 99) {
//   console.log("Bu ikki xonali son");
// } else if (number >= 100 && number <= 999) {
//   console.log("Bu uch xonali son");
// } else if (number >= 1000 && number <= 9999) {
//   console.log("Bu to'rt xonali son");
// }

//Sonning juft yoki toqligi

// var number = prompt("Sonni kiriting");
// var result1 = number % 2;
// if (result1 == 0) {
//   console.log("Bu son juft");
// } else if (result1 == 1) {
//   console.log("Bu son toq");
// }

//ko'p xonali sonlar va sonning juft yoki toqligi

// var number = prompt("Sonni kiriting");
// var result1 = number % 2;
// if (result1 == 0 && number >= 0 && number <= 9) {
//   console.log("Bu son juft va bir xonali");
// } else if (result1 == 0 && number >= 10 && number <= 99) {
//   console.log("Bu son juft va ikki xonali");
// } else if (result1 == 0 && number >= 100 && number <= 999) {
//   console.log("Bu son juft va uch xonali");
// } else if (result1 == 0 && number >= 1000 && number <= 9999) {
//   console.log("Bu son juft va to'rt xonali");
// } else if (result1 == 1 && number >= 0 && number <= 9) {
//   console.log("Bu son toq va bir xonali");
// } else if (result1 == 1 && number >= 10 && number <= 99) {
//   console.log("Bu son toq va ikki xonali");
// } else if (result1 == 1 && number >= 100 && number <= 999) {
//   console.log("Bu son toq va uch xonali");
// } else if (result1 == 1 && number >= 1000 && number <= 9999) {
//   console.log("Bu son toq va to'rt xonali");
// }

//O'sish tartibida

// 3 ta son kiritiladi
// var a = Number(prompt("1-sonni kiriting"));
// var b = Number(prompt("2-sonni kiriting"));
// var c = Number(prompt("3-sonni kiriting"));

// var numbers = [a, b, c];
// numbers.sort(function (x, y) {
//   return x - y;
// });

// var result = numbers.join("");

// console.log("Natija:", result);

//Eng kihcigini topish

// var a = Number(prompt("1-uch xonali sonni kiriting"));
// var b = Number(prompt("2-uch xonali sonni kiriting"));
// var c = Number(prompt("3-uch xonali sonni kiriting"));
// if (a < 100 || a > 999 || b < 100 || b > 999 || c < 100 || c < 999) {
//   console.log("Iltimos 3 xonali son kiritng");
// } else {
//   var min = Math.min(a, b, c);
//   console.log("Eng kichik son", min);
// }

// var number = prompt("Son kiriting (kamida 3 xonlai bo'lsin)");
// console.log(Math(number) * 100);

//Speed

// var number = prompt("Tezlikni kiriting");
// var result1 = number - 70;
// var result2 = result1 / 5;
// if (number <= 70) {
//   console.log("Hammasi yaxshi");
// } else if (result2 <= 1) {
//   console.log("Sizda 1-point bor");
// } else if (result2 <= 2) {
//   console.log("Sizda 2-point bor");
// } else if (result2 <= 3) {
//   console.log("Sizda 3-point bor");
// } else if (result2 <= 4) {
//   console.log("Sizda 4-point bor");
// } else if (result2 <= 5) {
//   console.log("Sizda 5-point bor");
// } else if (result2 <= 6) {
//   console.log("Sizda 6-point bor");
// } else if (result2 <= 7) {
//   console.log("Sizda 7-point bor");
// } else if (result2 <= 8) {
//   console.log("Sizda 8-point bor");
// } else if (result2 <= 9) {
//   console.log("Sizda 9-point bor");
// } else if (result2 <= 10) {
//   console.log("Sizda 10-point bor");
// } else if (result2 <= 11) {
//   console.log("Sizda 11-point bor");
// } else if (result2 <= 12) {
//   console.log("Prava reshon");
// } else if (result2 >= 12) {
//   console.log("Prava reshon");
// }

//Foydalanuvchi yoshini aniqlash

// var year = prompt("Yilingizni kiriting");
// var age = 2025 - year;
// console.log(age);
