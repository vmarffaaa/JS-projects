//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function ifAge() {
    let age = document.getElementById("ageInput").value;

    if (age < 18) {
        document.getElementById("message").innerText = "Вам немає 18!!! Доступ заборонено!";
    } else {
        document.getElementById("message").innerText = "Вам є 18! Доступ дозволено.";
    }
}

document.getElementById("submitButton").addEventListener("click", ifAge);
