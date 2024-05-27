// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then((response) => console.log(response.carts))

