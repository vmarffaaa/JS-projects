// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
function generateTable() {
    let rows = parseInt(document.getElementById("rowsInput").value);
    let cols = parseInt(document.getElementById("colsInput").value);
    let content = document.getElementById("contentInput").value;

    let tableElement = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let row = tableElement.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = content;
        }
    }

    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = '';

    tableContainer.appendChild(tableElement);
}

document.getElementById("generateButton").addEventListener("click", generateTable);