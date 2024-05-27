// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

window.onload = function() {
    let currentValue = localStorage.getItem('counter');

    if (currentValue === null) {
        currentValue = 0;
    } else {
        currentValue = parseInt(currentValue, 10) + 1;
    }

    localStorage.setItem('counter', currentValue);
    document.getElementById('counter').innerText = currentValue;
};