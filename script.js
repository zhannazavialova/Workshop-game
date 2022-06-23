/*Выбери кнопку Start на странице и помести его в переменную start, 
и выведи информацию о нем в консоль браузера(console)*/
var start = document.querySelector("#start > button");
console.dir(start);

/*Выбери блок жизней(#lifes) на странице и помести его в переменную lifes, 
и выведи информацию о нем в консоль браузера*/
var lifes = document.querySelector("#lifes");
console.dir(lifes);

/*Выбери блок очков(#score) на странице и помести его в переменную score,
и выведи информацию о нем в консоль браузера.*/
var score = document.querySelector("#score");
console.dir(score);

//Измени цвет кнопки на зеленый используя JavaScript
start.style.background = "green";

/*Измени ширину и высоту кнопки, 
Сделай ширину равной 200px и высоту равной 100px используя JavaScript*/
start.style.height = "100px"
start.style.width = "200px";


