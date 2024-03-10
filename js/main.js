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
    category:
      isChecked.parentElement.getElementsByTagName("label")[0].className,
    done: false,
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
    list.innerHTML += `<div class="list-box">
    <li id="${item.id}" >
    <div class="radio raio-list">
              <input onclick=isDone(${item.id}) name="myCheckbox_${item.id}" ${
      item.done ? "checked" : ""
    }
                          type="radio"
                          id="checkbox_${item.id}" 
                          onchange = isDone(${item.id}) />
              <label class="${item.category}" for="checkbox_${
      item.id
    }" ></label>
            </div>


      <input type="text" class="list-title ${
        item.done ? "lined" : ""
      }" value="${item.title}" 
        id="update_todo_${item.id}" onChange=inpChange(${item.id}) readonly/>
        <button class ="upd-btn" id="${item.id}">Edit</button>
        <button class = "del-btn">Delete</button></li> </div>`;
  });

  addDeleteEvent();
  addUpdateEvent();
}

function deleteProduct(e) {
  console.log(e);
  let productId = e.target.parentNode.id;
  db = db.filter((item) => item.id != productId);
  render();
}

function addDeleteEvent() {
  let delBtns = document.querySelectorAll(".del-btn");
  delBtns.forEach((item) => item.addEventListener("click", deleteProduct));
}

function addUpdateEvent() {
  let updBtns = document.querySelectorAll(".upd-btn");
  console.log("here");
  updBtns.forEach((item) =>
    item.addEventListener("click", () => enableTitleInput(item.id))
  );
}

function enableTitleInput(id) {
  let elementId = "update_todo_" + id;
  console.log(elementId);
  let titleInput = document.getElementById(elementId);
  titleInput.removeAttribute("readonly");
  titleInput.focus();
}

function inpChange(itemId) {
  let inp = document.getElementById("update_todo_" + itemId);
  let inpValue = inp.value;
  let product = db.find((item) => item.id == itemId);
  product.title = inpValue;
}

function isDone(itemId) {
  let inp = document.getElementById("update_todo_" + itemId);
  let checkBox = document.getElementById("checkbox_" + itemId);
  if (checkBox.checked) {
    inp.classList.add("lined");
  } else {
    inp.classList.remove("lined");
    checkBox.checked = false;
  }
  let product = db.find((item) => item.id == itemId);
  product.done = checkBox.checked;
}
