// task 1

let nameHuman = prompt("Как тебя зовут?", "Name");
let age = prompt("Сколько тебе лет?", 100);
let city = prompt("Из какой ты страны?", "Ukraine");

console.log(`Приветствую тебя ${nameHuman}, ${age} лет из ${city}`);
document.write(`Приветствую тебя ${nameHuman}, <br> ${age} лет из ${city} <br>`);


// task 2

const number = 12345;

const digits = number.toString().split('');

console.log(digits.join(' ')); //1 2 3 4 5



 
