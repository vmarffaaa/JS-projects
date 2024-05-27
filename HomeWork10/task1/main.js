
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
document.getElementById('userForm').onsubmit = function(e) {
    e.preventDefault();

    // Зчитування значень з полів форми
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;

    if (!name || !surname || !age) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    let userObj = {
        name: name,
        surname: surname,
        age: age
    };

    let usersFromStorage = localStorage.getItem('users');
    let usersArr;
    if (usersFromStorage) {
        usersArr = JSON.parse(usersFromStorage);
    } else {
        usersArr = [];
    }

    usersArr.push(userObj);

    localStorage.setItem('users', JSON.stringify(usersArr));
    displayUsers();
};

function displayUsers() {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    let usersFromStorage = localStorage.getItem('users');
    let usersArr;
    if (usersFromStorage) {
        usersArr = JSON.parse(usersFromStorage);
    } else {
        usersArr = [];
    }

    usersArr.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.innerHTML = `<p>${user.name} ${user.surname} ${user.age}</p>`;
        outputDiv.appendChild(userDiv);
    });
}

displayUsers();


