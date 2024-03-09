let addBtn = document.querySelector(".add-btn");
let titleInp = document.querySelector("#add-todo");
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
  };
  db.push(newObj);

  titleInp.value = "";
  isChecked.checked = false;

  render();
});

function render() {
  let list = document.querySelector(".product-list");
  list.innerHTML = "";
  db.forEach((item) => {
    list.innerHTML += `<li id="${item.id}">
      <input type="radio" id=${item.category} id="checkbox" />
      <input type="text" value="${item.title}" id="update-todo" readonly/>
     <button id = "del-btn">Delete</button>;
        <button id = "upd-btn">Update</button></li>`;
  });

  addDeleteEvent();
  // addUpdateEvent();
  // console.log(db);
  // isDone();
}

function deleteProduct(e) {
  console.log(e);
  let productId = e.target.parentNode.id;
  db = db.filter((item) => item.id != productId);
  render();
}

function addDeleteEvent() {
  let delBtns = document.querySelectorAll("#del-btn");
  delBtns.forEach((item) => item.addEventListener("click", deleteProduct));
}

// function isDone() {
//   let done = document.getElementById(checkbox);
//   consolelog(done);
// }

// function updateTitle(e) {
//   let titleList = document.getElementById("#update-todo");
//   let productId = e.target.parentNode.id;
//   console.log(e);
//   console.log(titleList.value);
//   let product = db.find((item) => item.id == productId);
//   product.title = titleList.value;
// }

// function addUpdateEvent() {
//   let updBtns = document.querySelectorAll("#upd-btn");
//   updBtns.forEach((item) => item.addEventListener("click", updateTitle));
// }
