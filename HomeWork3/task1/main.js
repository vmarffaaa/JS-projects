document.write('<h2> ---------- Task 1.1 ---------- </h2>')
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque expedita in 
        modi quae quia reprehenderit similique suscipit veritatis? Adipisci architecto beatae earum, inventore 
        laborum magni nobis numquam ratione repellendus.</div>`);
}


document.write('<h2> ---------- Task 1.2 ---------- </h2>')
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error esse illo omnis. <b><i>
Індекс ${i} </i></b></div>`);
}


document.write('<h2> ---------- Task 1.3 ---------- </h2>')
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let num1 = 0;
while (num1 < 20) {
    document.write('<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, molestiae!</h1>');
    num1++;
}


document.write('<h2> ---------- Task 1.4 ---------- </h2>');
let num2 = 0;
while (num2 < 20) {
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, laudantium? <i>${num2}</i></h1>`);
    num2++;
}

