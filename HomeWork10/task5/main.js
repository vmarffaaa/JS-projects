// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".

function hideElement() {
    let element = document.getElementById("text");
    if (element) {
        element.style.display = "none";
    }
}

document.getElementById("hideButton").addEventListener("click", hideElement);


