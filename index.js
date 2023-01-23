//написати функцію, яка приймає рядок і повертає кількість голосних в рядку
//регістр не враховувати (рахувати і великі і маленькі голосні)
//працюємо тільки з латинецею
//const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
//не використовувати регулярні вирази!

//Mariia

const vowels = ["a", "e", "i", "u", "o", "y"];
const str2 = "agagag";
const amountSymbols = (str, symbols = vowels) =>
  str
    .trim()
    .toLowerCase()
    .split("")
    .filter((word) => symbols.includes(word)).length;

console.log(amountSymbols(str2));
