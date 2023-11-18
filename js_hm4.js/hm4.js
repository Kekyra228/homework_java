let i = 0;
    while(i < 2) {
    console.log("Привет");
     i++;
 }

//  let num = 1;
//     while(num<6) {
//     console.log(num);
//     num++;
//  }

//  let num2 = 7;
//     while(num2<23) {
//     console.log (num2);
//      num2++;
// }

let obj = {
 "Коля":200,
 "Вася":300,
 "Петя":400
};

for (let name in obj)
console.log(`${name} имеет зарплату ${obj[name]}`);




// let n = 1000;
// let count = 0;

// do {
//     n/=2;
// } while (n >= 50){
//     console.log(n);
//     count++;
// };



let friday = 3; //первая пятница 3 число
for (let i = friday; i <= 31; i+= 7 ){
console.log(`Сегодня пятница ${friday} число.Необходимо подготовить отчет`);
}




// while (friday <= 31) {
//     friday += 7;
// }
// console.log(`Сегодня пятница ${friday} число.Необходимо подготовить отчет`)