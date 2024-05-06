// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<h2> ---------- Task 3.1 ---------- </h2>');
//- користувачів зі статусом true
document.write('<ul> <b>Користувачі зі статусом true</b>');
for(let i = 0; i < users.length; i++){
    if (users[i].status === true){
        document.write(`<li> ${users[i].name} </li>`);
    }
}
document.write('</ul>');

document.write('<h2> ---------- Task 3.2 ---------- </h2>');
//- користувачів зі статусом false
document.write('<ul> <b>Користувачі зі статусом false</b>');
for(let i = 0; i < users.length; i++){
    if (users[i].status === false){
        document.write(`<li> ${users[i].name} </li>`);
    }
}
document.write('</ul>');

document.write('<h2> ---------- Task 3.3 ---------- </h2>');
//- користувачів які старші за 30 років
document.write('<ul><b>Користувачі старші за 30 років</b>');
for(let i = 0; i < users.length; i++){
    if (users[i].age > 30){
        document.write(`<li> ${users[i].name} </li>`);
    }
}
document.write('</ul>');