const colorLine = (color = 'purple', num = 1) => {
    document.write(`<hr style="border: ${color} solid ${num}px">`);
};

console.log('-----------Task1-----------');
const square = (a, b) => console.log(`Площа прямокутника: ${a * b}`);
square(5, 8);

console.log('-----------Task2-----------');
const circleArea = r => {
    const PI = 3.14;
    console.log(`Площа кола: ${PI * r * r}`);
};
circleArea(7);

console.log('-----------Task3-----------');
const cylinderArea = (h, r) => {
    const PI = 3.14;
    console.log(`Площа циліндра: ${2 * PI * r * h + 2 * PI * r * r}`);
};
cylinderArea(10, 4);

console.log('-----------Task4-----------');
const printerArray = array => {
    console.log('Масив елементів:');
    for (const item of array) {
        console.log(item);
    }
};
let color = ['red', 'black', 'green', 'pink', 'orange', 'gray', 'blue', 'yellow'];
printerArray(color);

document.write('-----------Task5-----------');
const createParagraph = text => {
    document.write(`<p>${text}</p>`);
};
let paragraph = 'text for paragraph';
createParagraph(paragraph);

document.write('-----------Task6-----------');
const createUl = li => {
    document.write(`<ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>`);
};
let li = 'text for li';
createUl(li);

document.write('-----------Task7-----------');
const loopUl = (li, iter) => {
    for (let i = 0; i < iter; i++) {
        document.write(`<ul><li>${li}</li></ul>`);
    }
};
loopUl(li, 6);

document.write('-----------Task8-----------');
const arrayUl = array => {
    document.write('<ul>');
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write('</ul>');
};
let numbers = [33, 54, 1, 86, 3, 66, 2, 11];
arrayUl(numbers);

document.write('-----------Task9-----------');
const divArr = arr => {
    for (const item of arr) {
        for (const itemKey in item) {
            document.write(`<div>${itemKey}: ${item[itemKey]}</div>`);
        }
        colorLine();
    }
};
let people = [
    { id: 1, name: 'Катя', age: 18 },
    { id: 2, name: 'Олег', age: 28 },
    { id: 3, name: 'Віктор', age: 12 },
    { id: 4, name: 'Настя', age: 42 },
    { id: 5, name: 'Юля', age: 23 },
    { id: 6, name: 'Матвій', age: 5 }
];
divArr(people);

console.log('-----------Task10-----------');
const findMinimum = numArr => {
    let min = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
    }
    console.log(`Найменше число з масиву: ${min}`);
};
let num = [9, 65, 32, 9, 22, 23, 77, 12, 19, 5];
findMinimum(num);

console.log('-----------Task11-----------');
const sum = arr => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    console.log(`Сума чисел у масиві: ${sum}`);
};
sum(num);

console.log('-----------Task12-----------');
const swap = (arr, index1, index2) => {
    const updateIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = updateIndex;
    return arr;
};
console.log(num);
console.log(swap(num, 0, 7));

console.log('-----------Task13-----------');
const exchange = (summ, arr, valuta) => {
    console.log(`Вхідна сума коштів: ${summ}`);
    for (const item of arr) {
        if (valuta === arr[0].currency) {
            console.log(`Переведена сума коштів: ${summ / arr[0].value}`);
        } else if (valuta === arr[1].currency) {
            console.log(`Переведена сума коштів: ${summ / arr[1].value}`);
        } else {
            console.log('Даної валюти немає в наявності!');
        }
    }
};
let valye = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
exchange(10000, valye, 'USD');


