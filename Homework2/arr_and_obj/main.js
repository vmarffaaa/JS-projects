// 1. Масиви та об'єкти:

//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1=[];
arr1[arr1.length] = 1;
arr1[arr1.length] = 2;
arr1[arr1.length] = 3;
arr1[arr1.length] = 4;
arr1[arr1.length] = 5;
arr1[arr1.length] = 6;
arr1[arr1.length] = 7;
arr1[arr1.length] = 8;
arr1[arr1.length] = 9;
arr1[arr1.length] = 10;

console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
console.log('-------------------------------------------------------------');


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: "To Kill a Mockingbird",
    pageCount: 324,
    genre: "Southern Gothic, Bildungsroman",
    authors: [
        { name: "Harper Lee", age: 44 }
    ]
};

console.log(book1);

const book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    pageCount: 224,
    genre: "Science fiction, comedy",
    authors: [
        { name: "Douglas Adams", age: 39 }
    ]
};

console.log(book2);

const book3 = {
    title: "The Lord of the Rings: The Two Towers",
    pageCount: 544,
    genre: "Fantasy",
    authors: [
        { name: "J.R.R. Tolkien", age: 73 }
    ]
};

console.log(book3);
console.log('-------------------------------------------------------------')

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 556,
    genre: "fantasy",
    authors: [
        { name: "Joanna Rowling", age: 58 }
    ]
};

console.log(book4);

const book5 = {
    title: "The Shining",
    pageCount: 640,
    genre: "horror",
    authors: [
        { name: "Stephen King", age:76}
    ]
};

console.log(book4);

const book6 = {
    title: "The Picture of Dorian Gray",
    pageCount: 328,
    genre: "gothic novel",
    authors: [
        { name: "Oscar Wilde", age: 46 }
    ]
};

console.log(book6);
console.log('------------------------------------------------------------')


//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    { name: "Vika", username: "victoriaaa", password: "password1" },
    { name: "Marta", username: "marffaaa", password: "password2" },
    { name: "Ilona", username: "ilona_98", password: "password3" },
    { name: "Vlad", username: "whatislove", password: "password4" },
    { name: "Milena", username: "mila432", password: "password5" },
    { name: "Max", username: "maxxx77", password: "password6" },
    { name: "Victor", username: "victor_nov", password: "password7" },
    { name: "Yaryna", username: "rusya", password: "password8" },
    { name: "Mark", username: "markus", password: "password9" },
    { name: "Solomiya", username: "solomiyaa33", password: "password10" }
];

let user0 = users[0];
console.log(user0.password);

let user1 = users[1];
console.log(user1.password);

let user2 = users[2];
console.log(user2.password);

let user3 = users[3];
console.log(user3.password);

let user4 = users[4];
console.log(user4.password);

let user5 = users[5];
console.log(user5['password']);

let user6 = users[6];
console.log(user6['password']);

let user7 = users[7];
console.log(user7['password']);

let user8 = users[8];
console.log(user8['password']);

let user9 = users[9];
console.log(user0['password']);
console.log('------------------------------------------------------------')


//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.

let temperatures = [
    ['Monday', 17, 25, 19],
    ['Tuesday', 20, 29, 22],
    ['Wednesday', 19, 24, 19],
    ['Thursday', 12, 15, 9],
    ['Friday', 17, 19, 10],
    ['Saturday', 20, 27, 21],
    ['Sunday',20, 24, 18],
]

console.log(temperatures)

