//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('usersList');
        users.forEach(user => {
            let counter = 0;
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `https://jsonplaceholder.typicode.com/users/${parseInt(user.id)}`;
            link.textContent = `${user.id} - ${user.name}`;
            listItem.appendChild(link);
            userList.appendChild(listItem);
        });
    })