//Задание 1

let hello = 0;
while (hello < 2) {
    console.log("Привет!");
    hello++;
}

//Задание 2

let number = 1;

while (number <= 5) {
    console.log(number);
    number++;
}

//Задание 3

let point = 7;

while (point <= 22) {
    console.log(point);
    point++;
}

//Задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let key in obj) {
    alert(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
alert(num);

//Задание 6

for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница, ${dayNumber} число. Необходимо подготовить отчет.`);
}