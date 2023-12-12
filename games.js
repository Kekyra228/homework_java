function seasons() {
    let month = prompt("Введите число")

    if (month >=3 && month <= 5) {
        return 'Spring'
    }

    else if (month >=6 && month <=8) {
        return 'Summer'}

    else if (month >=9 && month <=11) {
        return 'autumn'}

    else if (month === 12 || month === 1 || month ===2) {
        return 'Winter'}

    else   {
        return 'error'}
         
        alert (month)
}




function rememberWords() {
const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const randomArr = arr.sort(() => Math.random() - 0.5);
console.log(randomArr)

const question = String(prompt("Чему равнялся первый элемент массива?"));
const question2 = String(prompt("Чему равнялся последний элемент массива"));


if (question === arr[0] && question2 === arr[6]) {
   alert("Угадал, поздравляю!")

} 
else if (question === arr[0] || question2 === arr[6]) {
   alert("«Вы были близки к победе!")
}
else {
   alert ("Неверно :(")
}
}