// let items = document.getElementsByClassName('item');
// let items2 = document.querySelectorAll('.items');
// // for(let i = 0; i < items.length; i++){
// //     items[i].innerText = 'Hello';
// //     console.log(items[i]);
// // }

// items2.forEach(item => {console.log(item)});

// let list = document.getElementsByTagName('ul');
// // console.log(list[0]);
// // list[0].innerText = '<li>Content</li>';
// list[0].innerHTML = '<li>Content</li>'

// let btn = document.querySelector('button');
// const btnClick = () => alert('Вы нажали на кнопку');
// btn.addEventListener('click', btnClick);
// btn.removeEventListener('click',btnClick);

// let btn = document.querySelector('button');
// let body = document.querySelector('body');
// btn.onclick = () => {
//     body.classList.toggle('red');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Дом полностью загружен');
// })

// window.addEventListener('online',() => {
//     console.log('Нет доступа');
// })

// document.addEventListener('mousemove', () => console.log("Вы подвинули мышь"))

// document.addEventListener('mousemove', (e) => {
//     console.log(e.clientX, e.clientY);
// })

// document.addEventListener('mousedown', () => {
//     console.log("Вы нажали на кнопку");
// })

// document.addEventListener('mouseup', () => {
//     console.log("Вы отжали на кнопку");
// })

// let btn = document.querySelector('button');
// let body = document.querySelector('body');
// btn.addEventListener('mouseover', () => {
// btn.style.background = 'aqua';
// })

// btn.addEventListener('mouseleave', () => {
// btn.style.background = 'yellow';
//     })

// let img = document.querySelector('img');
// count = 0;
// const  move  = () => {
//     if(count >200){
//         img.style.marginLeft =  count - 20 + 'px';
//         count -=15;
//     }

//     img.style.marginLeft =  count + 20 + 'px';
//     count +=15;
// };
// document.addEventListener('click', move)

// let h2 = document.querySelectorAll('h2');
// let btn = document.querySelector('button');
// function changeH2(){
//     for( let i of h2){
//         i.innerText = 'Mika';
//     }
// }
// btn.addEventListener('click',changeH2);

// let btn = document.querySelector('button');
// let body = document.querySelector('body');
// btn.addEventListener('click', () => {
// body.style.background = 'pink';
// })

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let p = document.createElement('p');
// function addP(event){
//     let p = document.createElement('p');
//     p.innerText = `${event.target.innerText} ${event.clientX} ${event.clientY}`;
//     document.body.appendChild(p);
// }
// btn.addEventListener('click',addP);

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

// let div1 = document.createElement('div');
// div1.style.width = '200px';
// div1.style.height = '200px';
// div1.style.background = 'aqua';
// document.body.append(div1);

// document.addEventListener('keydown', function (event) {
//   if (event.key == 'r') {
//     div1.style.background = 'red';
//   }
//   else if (event.key == 'g') {
//     div1.style.background = 'green';
//   }
//   else if (event.key == 'b') {
//     div1.style.background = 'blue';
//   }
//   else if (event.key == 'w') {
//     div1.style.background = 'white';
//   }
//   else if (event.key == 'B') {
//     div1.style.background = 'black';
//   }
//   else if (event.key == 'G') {
//     div1.style.background = 'gray';
//   }
// });

// let input = document.querySelector('input');
// function colorInput(event){
//  document.body.style.background = event.target.value;
// }
// input.addEventListener('click',colorInput)

// let data = [1,2, [4,5,6], [7,8]]

// function checkTask(arr){
// let sum = arr.reduce((a,b) => {
//     a+b
//     if (typeof b === Object){
//         let d = b.reduce((x,y) => x+y)
//         console.log(d);
//     };
// });
// console.log(sum);
// }
// console.log(checkTask(data));

// window.addEventListener('resize', (e) =>{
//     console.log('Размер окошко был изменен');
// })

// let form = document.querySelector('form');
// let input = document.querySelector('input');
// let h1 = document.querySelector('h1');

// form.addEventListener('submit', (e) => {
// e.preventDefault();
// h1.innerText = input.value;
// // console.log('Worker');
// })

// keypress/keydown/keyup

// document.addEventListener('keydown', (e) => {
//     console.log(e.key);
// })

// PROJECT

let addBtn = document.querySelector(".add-btn");
// let saveBtn = document.querySelector('.save-btn')
let titleInp = document.querySelector("#add-todo");
// let colorInp = document.querySelector('#add-color');
// let priceInp = document.querySelector('#add-price');
let checkCategory = document.getElementsByName("myCheckbox");

let db = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isChecked = Array.from(checkCategory).find(checkChecked);

  if (!titleInp.value.trim() || !isChecked) {
    alert("Some inputs are empty!");
    return;
  }

  function checkChecked(value) {
    if (value.checked === true) return value;
  }
  let newObj = {
    id: Date.now(),
    title: titleInp.value,
    category: isChecked.id,
    // color:colorInp.value,
    // price: priceInp.value
    // checkbox:checkCategory
  };
  db.push(newObj);
  alert("Added Successfully!");
  console.log(db);

  titleInp.value = "";
  isChecked.checked = false;

  render();
});

function render() {
  let list = document.querySelector(".product-list");
  list.innerHTML = "";
  db.forEach((item) => {
    list.innerHTML += `<li id="${item.id}">
      <input type="radio" id=${item.category} name="myCheckbox" />
     ${item.title};<button id = "del-btn">Delete</button>;
        <button id = "upd-btn">Update</button></li>`;
  });

  // addDeleteEvent();
  // addUpdateEvent();
}

//   function deleteProduct(e) {
//     //   console.log(e);
//     let productId = e.target.parentNode.id;
//     db = db.filter((item) => item.id != productId);
//     render();
//   }

//   function addDeleteEvent() {
//     let delBtns = document.querySelectorAll("#del-btn");
//     delBtns.forEach((item) => item.addEventListener("click", deleteProduct));
//   }

//   function updateProduct(eZS){
//     let productId = e.target.parentNode.id;
//     let product = db.find(item => item.id == productId);
//     titleInp.value = product.title;
//     colorInp.value = product.color;
//     priceInp.value = product.price;
//     let form = document.querySelector('form');
//     form.setAttribute('id',product.id);
//   }

//   function addUpdateEvent(){
//     let updBtns = document.querySelectorAll('#upd-btn');
//     updBtns.forEach(item =>item.addEventListener('click',updateProduct))
//   }

//   function saveChanges(e){
//     e.preventDefault();
//     let form = document.querySelector('form');
//     if(!form.id) return;
//     let product = db.find(item => item.id == form.id);
//     if(!titleInp.value.trim() || !colorInp.value.trim() || !priceInp.value.trim()){
//         alert('Some inputs are empty!');
//         return;
//     };
//     product.title = titleInp.value;
//     product.color = colorInp.value;
//     product.price = priceInp.value;
//     form.removeAttribute('id');
//     titleInp.value = '';
//     colorInp.value = '';
//     priceInp.value = '';
//     render();
//   }

//   saveBtn.addEventListener('click',(e) => saveChanges(e));
// Import stylesheets
// import './style.css';

// task1 easy---------------------------------
// Создайте кнопку button.Далее создайте обработчик событий, который при клике выводить модальное окно с приветствием "Hello!"
//1 вариант
// const button = document.getElementById('myButton');
// button.addEventListener('click', () => alert('Hello!'));
//2 вариант
// const button = document.querySelector("#myButton");
// button.addEventListener('click', () => alert('Hello!'));

//task2 easy=-------------------------------------
// Создайте div с текстом "Бум!". Далее создайте событие где по клику экрана в консоле выводятся координаты точки на экране.
//1 вариант
// const button = document.getElementById('myElement');
// button.addEventListener('click', (event) => {
//   console.log(event);
//   console.log(event.clientX);
//   console.log(event.clientY);
// });
//2 вариант
// const button  = document.querySelector("div");
// button.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.clientX);
//     console.log(event.clientY);
//   });

//task3 middle----------------------------------------------
// Создайте кнопку button и тег "p" c id="demo".
// Далее создайте событие, при клике который вызывает функцию  displayDate().Функция  displayDate() с помощью селектора с id "demo" cоздаёт объект Date() с текущей датой и временем. Прочитайте про Data()
//1 вариант
// document.getElementById("myBtn").addEventListener("click", displayDate);
// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
//2 вариант
// const displayDate = () => {
//   document.querySelector('#demo').innerHTML = Date();
// };
// document.querySelector('#myBtn').addEventListener('click', displayDate);

//task4 middle----------------------------------------------
// Создайте  тег "p" c id="demo".
// Добавьте прослушиватель событий, который запускается, когда пользователь изменяет размер окна.Добавить обработчик событий в объект window
//1 вариант
// window.addEventListener('resize', function () {
//   document.getElementById('demo').innerHTML = Math.random();
// });
//2 вариант
// window.addEventListener('resize', () => {
//   document.querySelector('#demo').innerHTML = Math.random();
// });

//task5 middle----------------------------------------------
// Создать заголовки h4 с числами. При нажатию на число в нем должен появится квадрат числа, которое он содержит.
//1 вариант
// let elems = document.getElementsByTagName('h4');
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener('click',  square);
// }

// function square() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// }
//2 вариант
// let numbers = document.getElementsByTagName('h4');
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener('click', square);
// }
// function square() {
//   this.innerHTML *= this.innerHTML;
// }

//task6 middle----------------------------------------------
// Даны инпуты.
//  <input type="text" data-length="4" />
// <input type="text" data-length="7" />
// <input type="text" data-length="9" />
//  Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
//1 вариант
// let elems = document.getElementsByTagName('input');
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener('blur', func);
// }
// function func() {
//   let correctLength = this.dataset.length; //правильное количество
//   let inputDataLength = this.value.length; //вбитое в инпут количество
//   if (correctLength == inputDataLength) {
//     this.style.borderColor = 'green';
//   } else {
//     this.style.borderColor = 'red';
//   }
// }
//2 вариант
// let numbers = document.querySelectorAll('input');
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener('blur', func);
// }
// function func() {
//   let correctLength = this.dataset.length; //правильное количество
//   let inputDataLength = this.value.length; //вбитое в инпут количество
//   if (correctLength == inputDataLength) {
//     this.style.borderColor = 'green';
//   } else {
//     this.style.borderColor = 'red';
//   }
// }
//task7 middle----------------------------------------------
// Даны див.
// <div>Hello</div>
// По первому нажатию на  див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.

//1 вариант
// let elems = document.getElementsByTagName('div');
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener('click', setRed);
// }

// function setRed() {
//   this.style.background = 'red';
//   this.removeEventListener('click', setRed);
//   this.addEventListener('click', setGreen);
// }

// function setGreen() {
//   this.style.background = 'green';
//   this.removeEventListener('click', setGreen);
//   this.addEventListener('click', setRed);
// }
//2 вариант

// let numbers = document.querySelectorAll('div');
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener('click', setRed);
// }

// function setRed() {
//   this.style.background = 'red';
//   this.removeEventListener('click', setRed);
//   this.addEventListener('click', setGreen);
// }

// function setGreen() {
//   this.style.background = 'green';
//   this.removeEventListener('click', setGreen);
//   this.addEventListener('click', setRed);
// }
//task 8 middle----------------------------------------------
// Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех
// полей. Если останутся незаполненные поля — выводите предупреждение через alert()
//1 вариант
// let form = document.querySelector('form');
// let firstName = document.getElementById('fname');
// let lastName = document.getElementById('lname');
// var submit = document.getElementById('submit');

// form.onsubmit = function (e) {
//   if (firstName.value === '' || lastName.value === '') {
//     e.preventDefault();
//     alert('Оба поля должны быть заполнены!');
//   }
// };
//2 вариант
// let firstName = document.querySelector('#fname');
// let lastName = document.querySelector('#lname');
// let btnLogin = document.querySelector('#submit');
// submit.addEventListener('click', function () {
//   if (firstName.value === '' || lastName.value === '') {
//     alert('заполните поля!');
//   }
// });

// 9 task middle----------------------------------
// Создать кнопку , при нажатии которой цвет фона изменяется случайным образом.
//1 вариант
// const btn = document.getElementById('change');
// let body = document.body;
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
// btn.addEventListener('click', function () {
//   const rndCol =
//     'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   body.style.backgroundColor = rndCol;
// });

//2 вариант
// const btn = document.querySelector('#change');
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
// btn.onclick = function () {
//   const rndCol =
//     'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// };
//10 task easy-----------------------------------------------------
//Имеются инпут <input type="text" id="input" />. Повесьте обработчик событий  'keyup' и выведите на консоль "pressed" при нажатии на keyup.
// const element2 = document.querySelector('#input');
// element2.addEventListener('keyup', () => console.log('pressed!'));
//1 вариант
//2 вариант
// const element = document.getElementById('input');
// element.addEventListener('keyup', () => console.log('pressed!'));

// 11 task easy-----------------------------------------------------
//Создайте событие input, где при каждом нажатии кнопки на клавиатуре будем выводить в консоль текущее содержимое инпута
//1 вариант
// let elem = document.getElementById('elem');
// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });
//2 вариант
// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });

// 12 task easy-----------------------------------------------------
// у нас есть  инпут и кнопка:
//  <input id="elem" value="text" />
//<input type="submit" id="button" />
// Создайте событие, где при нажатии на кнопку установливается фокус ввода на наш инпут
//1 вариант
// let elem = document.querySelector('#inp');
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//   elem.focus();
// });
//2 вариант
// let elem = document.getElementById('inp');
// let button = document.getElementById('button');

// button.addEventListener('click', function () {
//   elem.focus();
// });
// 13 task easy-----------------------------------------------------
//У нас имеется  выпадающий список
// <select id="select">
//<option>one</option>
//<option selected>two</option>
//<option>three</option>
//</select>
//Создайте событие change, которое при изменении селекта выведет на консоль текст выбранного пункта списка.
//1 вариант
// let select = document.querySelector('#select');
// select.addEventListener('change', function () {
//   console.log(this.value);
// });
//2 вариант
// let select = document.getElementById('select');
// select.addEventListener('change', function () {
//   console.log(this.value);
// });

// 14 task easy-----------------------------------------------------
//  у нас дана следующая кнопка:<button id="elem">text</button>
//По клику на кнопку  выведите сообщение о том, была ли нажата одна из клавиш  Alt или Shift:
//1 вариант
// let elem = document.querySelector('#text');
// elem.addEventListener('click', function (event) {
//   if (event.ctrlKey) {
//     alert('нажат Ctrl');
//   }
//   if (event.altKey) {
//     alert('нажат Alt');
//   }
//   if (event.shiftKey) {
//     alert('нажат Shift');
//   }
// });
//2 вариант
// let elem = document.getElementById('text');
// elem.addEventListener('click', function (event) {
//   if (event.ctrlKey) {
//     alert('нажат Ctrl');
//   }
//   if (event.altKey) {
//     alert('нажат Alt');
//   }
//   if (event.shiftKey) {
//     alert('нажат Shift');
//   }
// });

// 15 task easy-----------------------------------------------------
//У нас есть ссылка  <a href="/" id="link">ссылка</a>. Сделайте так, чтобы по клику на ссылку не происходило перехода на другую страницу
//1 вариант
// let elem = document.querySelector('#link');
// elem.addEventListener('click', function (event) {
//   event.preventDefault();
//   alert('Вы не можете перейти по этой ссылке!');
// });
//2 вариант
// let elem = document.getElementById('link');
// elem.addEventListener('click', function (event) {
//   event.preventDefault();
//   alert('Вы не можете перейти по этой ссылке!');
// });
// 16 task easy-----------------------------------------------------
//Имеется три вложенных дива  <div id="elem1">
//<div id="elem2">
//    <div id="elem3">Color</div>
//   </div>
// </div>
//Создайте обработчик события, где при нажатии в alert выводится цвета зеленый,голубой,красный.
//1 вариант
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function () {
//   alert('зеленый');
// });
// elem2.addEventListener('click', function () {
//   alert('голубой');
// });
// elem3.addEventListener('click', function () {
//   alert('красный');
// });
//2 вариант
// let elem1 = document.getElementById('elem1');
// let elem2 = document.getElementById('elem2');
// let elem3 = document.getElementById('elem3');

// elem1.addEventListener('click', function () {
//   alert('зеленый');
// });
// elem2.addEventListener('click', function () {
//   alert('голубой');
// });
// elem3.addEventListener('click', function () {
//   alert('красный');
// });
// 17 task easy-----------------------------------------------------
// Создайте событие которое подсвечивает поле для ввода красной рамкой если пароль слишком короткий. т.е < 5, иначе пусть подсвечивается черным.
//1 вариант
// const passwordElement = document.querySelector('#password');
// passwordElement.addEventListener('keyup', (event) => {
//   // текущий введенный пароль
//   const { target } = event;
//   if (target.value.length < 5) {
//     // короткий пароль
//     target.style.borderColor = 'red';
//   } else {
//     target.style.borderColor = 'black';
//   }
// });
//2 вариант
// const passwordElement = document.getElementById('password');
// passwordElement.addEventListener('keyup', (event) => {
//   // текущий введенный пароль
//   const { target } = event;
//   target.value.length < 5
//     ? (target.style.borderColor = 'red')
//     : (target.style.borderColor = 'black');
// });

// 18 hard-----------------------------------------------------
//Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul
//1 вариант
// let ul = document.getElementById('ul');
// let button = document.getElementById('btn-add');
// button.addEventListener('click', addLi);

// function addLi() {
//   let li = document.createElement('li');
//   li.innerHTML = 'пункт';
//   ul.appendChild(li);
// }
//2 вариант
// let ul = document.getElementById('ul');
// let button = document.getElementById('btn-add');
// button.addEventListener('click', addLi);

// function addLi() {
//   let li = document.createElement('li');
//   li.innerHTML = 'пункт';
//   ul.appendChild(li);
// }

// 19 hard-----------------------------------------------------
// Вставьте картинку и кнопку в html.
// При нажатии на кнопку скройте картинку
// путем затухания до прозрачного состояния.
//1 вариант
// let btn = document.getElementById('btn-dis');
// let img = document.getElementById('img');
// btn.addEventListener('click', function () {
//   img.style.opacity = '.10';
//   img.style.transition = '5s';
// });
//2 вариант
// let btn = document.querySelector('#btn-dis');
// let img = document.getElementById('img');
// btn.addEventListener('click', function () {
//   img.style.opacity = '.10';
//   img.style.transition = '5s';
// });

// 20 hard-----------------------------------------------------
// Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо)
// анимированно сдвигает элемент влево или вправо на 100px.
//1 вариант
// let animateDiv = document.querySelector('#animate');
// animateDiv.style.transition = 'all 1s ease';
// document.addEventListener('keydown', function (e) {
//   let marginLeft = parseInt(getComputedStyle(animateDiv).marginLeft);
//   let marginTop = parseInt(getComputedStyle(animateDiv).marginTop);
//   console.log(e);
//   if (e.key === 'ArrowLeft' && marginLeft > 0) {
//     animateDiv.style.marginLeft = `${marginLeft - 100}px`;
//   }
//   if (e.key === 'ArrowRight' && marginLeft < 1000) {
//     animateDiv.style.marginLeft = `${marginLeft + 100}px`;
//   }
//   if (e.key === 'ArrowUp' && marginTop > 100) {
//     animateDiv.style.marginTop = `${marginTop - 100}px`;
//   }
//   if (e.key === 'ArrowDown' && marginTop < 1000) {
//     animateDiv.style.marginTop = `${marginTop + 100}px`;
//   }
// });
//2 вариант
// let animateDiv = document.getElementById('animate');
// animateDiv.style.transition = 'all 1s ease';
// document.addEventListener('keyup', function (e) {
//   let marginLeft = parseInt(getComputedStyle(animateDiv).marginLeft);
//   let marginTop = parseInt(getComputedStyle(animateDiv).marginTop);
//   console.log(e);
//   if (e.key === 'ArrowLeft' && marginLeft > 0) {
//     animateDiv.style.marginLeft = `${marginLeft - 100}px`;
//   }
//   if (e.key === 'ArrowRight' && marginLeft < 1000) {
//     animateDiv.style.marginLeft = `${marginLeft + 100}px`;
//   }
//   if (e.key === 'ArrowUp' && marginTop > 100) {
//     animateDiv.style.marginTop = `${marginTop - 100}px`;
//   }
//   if (e.key === 'ArrowDown' && marginTop < 1000) {
//     animateDiv.style.marginTop = `${marginTop + 100}px`;
//   }
// });
//21 task middle
//Создайте событие «нажатие клавиши». Когда клавиша на клавиатуре нажата и удерживается, ваш браузер запускает событие и задний фон должен закрашиваться в фиолетовый цвет.
//1 вариант
// window.addEventListener('keydown', (event) => {
//   if (event.key == 'v') {
//     document.body.style.background = 'violet';
//   }
// });
// window.addEventListener('keyup', (event) => {
//   if (event.key == 'v') {
//     document.body.style.background = '';
//   }
// });
