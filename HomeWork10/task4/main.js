//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const itemsContainer = document.getElementById('items');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));
let currentPage = 1;
const itemsPerPage = 10;

function displayItems(page) {
    itemsContainer.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = items.slice(start, end);

    itemsToDisplay.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.textContent = item.id;
        itemsContainer.appendChild(div);
    });
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < items.length / itemsPerPage) {
        currentPage++;
        displayItems(currentPage);
    }
});

displayItems(currentPage);

