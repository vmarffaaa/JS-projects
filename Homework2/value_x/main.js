//3. - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x;

//--falsy-значення--
// x = 0;
// x = null;
// x = undefined;
// x = "";

// --звичайні значення--
// x = 9;
x = "number";
// x = true;

value = !!x;
if (value === false) {
    // x = "default";
    console.log('Default');
} else {
    // x = value;
    console.log("Звичайне значення");
}