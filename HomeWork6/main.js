const task= (i) => console.log(`---------Task${i}---------`)
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
task(1)
let stringArr = ['hello world', 'lorem ipsum', 'javascript is cool']
stringArr.forEach(string => console.log(`length of '${string}':${string.length}`))


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
task(2)
stringArr.forEach(string => console.log(string.toUpperCase()))


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
task(3)
let upperCaseString = ['hello world', 'lorem ipsum', 'javascript is cool']
upperCaseString.forEach(string => console.log(string.toLowerCase()))


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
task(4)
let str = ' dirty string   ';
console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
task(5)
let string = 'Ревуть воли як ясла повні'
console.log(string)
const toArr = (str)=> console.log(str.split(' '))
toArr(string)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
task(6)
let numbers =[10,8,-7,55,987,-1011,0,1050,0]
console.log(numbers)
console.log(numbers.map(String))


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
task(7)
const sortNums=  (arr, direction)=>{
if (direction === 'ascending'){
    console.log(arr.sort((user1, user2) => user1 - user2))
}else if (direction === 'descending'){
    console.log(arr.sort((user1, user2) => user2 - user1))
}else {
    console.log('Invalid value!')
}
}
let nums = [11,21,3]
sortNums(nums,'ascending')
sortNums(nums,'descending')


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
task(8.1)
console.log(coursesAndDurationArray.sort((duration1, duration2)=>
    duration2.monthDuration-duration1.monthDuration))

task(8.2)
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5))

task(8.3)
console.log(coursesAndDurationArray.map((course, index, array) =>
    ({id: index + 1, ...course})))


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deck = [];

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (let suit of suits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}
console.log(deck)

// - знайти піковий туз
task(9.1)
console.log(deck.filter(card => card.value === 'ace' && card.cardSuit === 'spade'))

// - всі шістки
task(9.2)
console.log(deck.filter(card => card.value === '6'));

// - всі червоні карти
task(9.3)
console.log(deck.filter(card => card.color === 'red'));

// - всі буби
task(9.4)
console.log(deck.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
task(9.5)
console.log(deck.filter(card => card.cardSuit === 'clubs' && (parseInt(card.value) >= 9 || card.value === 'jack' ||
    card.value === 'queen' || card.value === 'king' || card.value === 'ace')))
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
task(9.6)
console.log( deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spade.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamond.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.heart.push(card);
    } else {
        accumulator.club.push(card);
    }
    return accumulator;
}, { spade: [], diamond: [], heart: [], club: [] }))
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
task(10.1)
console.log((coursesArray.filter(course => course.modules.includes('sass'))))


// --написати пошук всіх об'єктів, в який в modules є docker
task(10.2)
console.log((coursesArray.filter(course => course.modules.includes('docker'))))