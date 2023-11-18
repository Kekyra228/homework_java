//let password = 1967;

//let ACKpassword = prompt("Введите пароль");

// if (ACKpassword != password) {
//     console.log ("Пароль введен неверно");
// } 
// else {
//     console.log ("Пароль введен верно");
// }



// let c = 5;
// c = 0;
// c = 10;
// c = -3;
// c = 2;

// if (c >0 && c <10) {

//     console.log ("Верно")

// } else {
//     console.log ("Неверно")
// };



let d = 50;
let e = 120;

if (d > 100 || e > 100) {
    console.log ("Верно");
} else {
    console.log ("Неверено");
}

//d > 100 || e > 100 ? alert("Верно") : ("Неверно");//так?


let a = '2';
let b = '3';
//alert(Number(a) + Number(b)); 

let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log("Зима");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;

    default: console.log("Неправильно")
        break;
}

// let number = Number(prompt('Введите число'),0)
// if (number%2 ==0) {
//     console.log (`Число ${number} четное`);
// } else {
//     console.log (`Число ${number} нечетное` );
// }
