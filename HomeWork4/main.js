// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('-----------Task1-----------')
function square(a,b) {
    console.log(`Площа прямокутника: ${a*b}`)
}
square(5, 8)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('-----------Task2-----------')
function circleArea(r) {
    const PI = 3.14
    console.log(`Площа прямокутника: ${PI*r*r}`)
}
circleArea(7)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('-----------Task3-----------')
function cylinderArea(h,r) {
    const PI = 3.14
    console.log(`Площа циліндра: ${2*PI*r*h+2*PI*r*r}`)
}
cylinderArea(10,4)

// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('-----------Task4-----------')
let color=['red','black','green','pink','orange','gray','blue','yellow']
function printerArray(array) {
    console.log('Масив елементів:')
    for (const item of array) {
        console.log(item)
    }
}
printerArray(color)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('-----------Task5-----------')
function createParagraph(text) {
    document.write(`<p> ${text} </p>`)
}
let paragraph = 'text for paragraph'
createParagraph(paragraph)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('-----------Task6-----------')
function createUl(li){
    document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`)
}
let li='text for li'
createUl(li)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('-----------Task7-----------')
function loopUl(li,iter) {
    for (let i=0;i<iter;i++){
        document.write(`<ul><li>${li}</li></ul>`)
    }
}
loopUl(li,6)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('-----------Task8-----------')
function arrayUl(array) {
    document.write('<ul>')
    for (let i=0;i<array.length;i++){
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}
let numbers=[33,54,1,86,3,66,2,11]
arrayUl(numbers)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write('-----------Task9-----------')
function divArr(arr){
    for (const item of arr) {
        for (const itemKey in item) {
            document.write(`<div>${itemKey}: ${item[itemKey]}</div>`)
            }
        colorLine()
        }
}
let people=[
    {id:1, name:'Катя',age:18},
    {id:2, name:'Олег',age:28},
    {id:3, name:'Віктор',age:12},
    {id:4, name:'Настя',age:42},
    {id:5, name:'Юля',age:23},
    {id:6, name:'Матвій',age:5}
]

divArr(people)
// - створити функцію яка повертає найменьше число з масиву
console.log('-----------Task10-----------')
function  findMinimum(numArr){
    let min = numArr[0]
    for (let i= 0; i < numArr.length; i++){
        if(numArr[i] < min){
            min = numArr[i]
        }
    }
    console.log(`Найменше число з масиву: ${min}`)
}
let num = [9, 65, 32, 9, 22, 23, 77, 12, 19, 5]
findMinimum(num)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('-----------Task11-----------')
function sum(arr) {
    let sum=0
    for(const item of arr){
        sum+=item
    }
    console.log(`Сума чисел у масиві: ${sum}`)
}
sum(num)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
console.log('-----------Task12-----------')
function swap(arr,index1,index2){
    const updateIndex = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=updateIndex

    return arr
}
console.log(num)
console.log(swap(num,0,7))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log('-----------Task13-----------')
function exchange(summ, arr, valuta ){
    console.log(`Вхідна сума коштів: ${summ}`)
    for (const item of arr){
       if (valuta === arr[0].currency){
           console.log(`Переведена сума коштів: ${summ/arr[0].value}`)
       }else if(valuta === arr[1].currency){
           console.log(`Переведена сума коштів: ${summ/arr[1].value}`)
       }else {
           console.log('Даної валюти немає в наявності!')
       }

    }
}
let valye=[
    {currency:'USD',value:40},
    {currency:'EUR',value:42}]

exchange(10000,valye,'USD')


function colorLine(color='purple', num=1){
    document.write(`<hr style="border: ${color} solid ${num}px">`)
}