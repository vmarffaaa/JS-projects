// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

window.onload = function () {
    let lastUpdated = localStorage.getItem('lastUpdated');

    if (!lastUpdated) {
        let price = 100;
        document.getElementById('priceBlock').textContent = `${price}грн`;
        localStorage.setItem('lastUpdated', Date.now());
        return;
    }

    let lastUpdatedTimestamp = parseInt(lastUpdated);
    let currentTime = Date.now();
    if (currentTime - lastUpdatedTimestamp >= 10000) {
        const priceBlock = document.getElementById('priceBlock');
        const currentPrice = parseInt(priceBlock.textContent);
        const newPrice = currentPrice + 10;
        priceBlock.textContent = `${newPrice}грн`;

        localStorage.setItem('lastUpdated', currentTime);
    }
};