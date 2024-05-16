const task= (i) => console.log(`---------Task${i}---------`)

task(1)
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
       }

let users=[]

let user1 = new User(4, 'Марк', 'Лещишин', 'mark123@gmail.com', '0667334598')
let user2 = new User(2, 'Анна', 'Петренко', 'anna@gmail.com', '0991234567');
let user3 = new User(5, 'Іван', 'Сидоренко', 'ivan@gmail.com', '0679876543');
let user4 = new User(7, 'Олексій', 'Мельник', 'oleksiy@gmail.com', '0501112233');
let user5 = new User(10, 'Ольга', 'Ковальчук', 'olga@gmail.com', '0632223344');
let user6 = new User(6, 'Андрій', 'Шевченко', 'andriy@gmail.com', '0973334455');
let user7 = new User(3, 'Тетяна', 'Григоренко', 'tetyana@gmail.com', '0684445566');
let user8 = new User(8, 'Ірина', 'Павлюченко', 'irina@gmail.com', '0665556677');
let user9 = new User(9, 'Василь', 'Бойко', 'vasyl@gmail.com', '0506667788');
let user10 = new User(1, 'Олена', 'Коваленко', 'olena@gmail.com', '0677778899');

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)

console.log(users)

task(2)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => user.id % 2 === 0));

task(3)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort( (user1, user2) => user1.id - user2.id))

task(4)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1, 'Іван', 'Петров', 'ivan@gmail.com', '0661234567', ['каша', 'молоко']);
let client2 = new Client(2, 'Марина', 'Сидорова', 'marina@gmail.com', '0672345678', ['яблуко', 'ківі']);
let client3 = new Client(3, 'Олег', 'Коваленко', 'oleg@gmail.com', '0683456789', ['масло']);
let client4 = new Client(4, 'Наталя', 'Мельник', 'natalia@gmail.com', '0994567890', ['хліб', 'сметана']);
let client5 = new Client(5, 'Анна', 'Шевченко', 'anna@gmail.com', '0505678901', ['сир']);
let client6 = new Client(6, 'Петро', 'Григоренко', 'petro@gmail.com', '0676789012', ['огірок', 'спагеті']);
let client7 = new Client(7, 'Катерина', 'Павлюк', 'kateryna@gmail.com', '0687890123', ['булгур', 'морква']);
let client8 = new Client(8, 'Віталій', 'Бойко', 'vitaliy@gmail.com', '0668901234', ['цибуля', 'йогурт']);
let client9 = new Client(9, 'Олена', 'Ковальчук', 'olena@gmail.com', '0979012345', ['черешня', 'куряче філе']);
let client10 = new Client(10, 'Михайло', 'Сідоренко', 'mikhailo@gmail.com', '0501234567', ['гірчиця', 'рис']);

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = []
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clients)

const iterator = (arr) => {
    for (const item of arr) {
        for (const itemKey in item) {
            if (typeof item[itemKey] === 'object') {
                for (const keyObj in item[itemKey]) {
                    console.log(`${keyObj}: ${item[itemKey][keyObj]}`)
                }
            } else {
                console.log(`${itemKey}: ${item[itemKey]}`)
            }
        }
        console.log('------------------------------------------------')
    }
}

iterator(clients)

task(5)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

console.log(clients.sort( (client1, client2) => client1.order.length - client2.order.length))

task(6)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Функція конструктор для створення об'єктів car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume

    // Функція drive()
    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
    }

    // Функція info()
    this.info = function() {
        console.log('------------------------------------------------')
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('------------------------------------------------')
    }

    // Функція increaseMaxSpeed()
    this.increaseMaxSpeed = function(newMaxSpeed) {
        this.maxSpeed += newMaxSpeed;
    }

    // Функція changeYear()
    this.changeYear = function(newValue) {
        this.year = newValue;
    }

    // Функція addDriver()
    this.addDriver = function(driver) {
        this.driver = driver;
    }
}

// Створення екземпляра класу Car за допомогою функції конструктора
let car1 = new Car('Civic', 'Honda', 2019, 200, 2)
car1.drive()
car1.info()
car1.increaseMaxSpeed(15)
console.log(`Нова максимальна швидкість: ${car1.maxSpeed}`)
car1.changeYear(2018)
console.log(`Новий рік випуску: ${car1.year}`)
car1.addDriver({name: 'Андрій', age: 25})
console.log(car1)

task(7)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:

class ClassCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        console.log('------------------------------------------------')
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log('------------------------------------------------')
    }
    increaseMaxSpeed(newMaxSpeed) {
        this.maxSpeed += newMaxSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new ClassCar('Accord', 'Honda', 2018, 220, 2.4);
car2.drive()
car2.info()
car2.increaseMaxSpeed(20);
console.log(`Нова максимальна швидкість: ${car2.maxSpeed}`)
car2.changeYear(2021)
console.log(`Новий рік випуску: ${car2.year}`)
car2.addDriver({name: 'Настя', age: 22})
console.log(car2)


task(8)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name
    this.age = age
    this.footSize = footSize
}
let cinderellas=[]
let cinderella1 = new Cinderella('Мілана', 25, 36);
let cinderella2 = new Cinderella('Ілона', 20, 39);
let cinderella3 = new Cinderella('Каріна', 21, 38);
let cinderella4 = new Cinderella('Юлія', 23, 37);
let cinderella5 = new Cinderella('Ольга', 22, 36);
let cinderella6 = new Cinderella('Ярина', 21, 39);
let cinderella7 = new Cinderella('Анна', 19, 35);
let cinderella8 = new Cinderella('Яна', 25, 38);
let cinderella9 = new Cinderella('Мирослава', 18, 36);
let cinderella10 = new Cinderella('Соломія', 24, 37);
cinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.\
let prince={
    name: 'Олександр',
    age: 25,
    shoeSize: 35
}
task(8.1)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize=== prince.shoeSize){
        console.log(`Шукана попелюшка:`)
        for(const key in cinderella){
            console.log(`${key}: ${cinderella[key]}`)
        }
    }
}

task(8.2)
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.shoeSize;
}));


// Через Array.prototype. створити власний foreach, filter, map

let numsArr= [42, 76, 9, 33, 29, 14, 98, 112, 43, 23, 72, 11, 6, 34, 87, 55]
task(9.1)

Array.prototype.createdForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}
numsArr.createdForEach(function(num) {
    console.log(num)
})


task(9.2)

Array.prototype.createdFilter = function (callback) {
    let arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    console.log(arr)
}
numsArr.createdFilter(function(item) {
    return item % 2 !== 0
})

task(9.3)

Array.prototype.createdMap = function(callback) {
    let mapArray = [];
    for (let i = 0; i < this.length; i++) {
        mapArray.push(callback(this[i]));
    }
    console.log(mapArray)
}

numsArr.createdMap(num => num * 2)

