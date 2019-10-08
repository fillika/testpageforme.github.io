document
  .querySelector(".cards__container")
  .addEventListener("click", function(e) {
    let target = e.target;
    let allDivs = document.querySelectorAll("div.custom-control");

    for (let i = 0; i < allDivs.length; i++) {
      if (target == allDivs[i]) return;
    }

    target.classList.toggle("non-active");

    const allInput = document.querySelectorAll("input[type=checkbox]");

    for (let i = 0; i < allInput.length; i++) {
      if (target == allInput[i] && target.classList.contains("non-active")) {
        delete allObj[target.id];
        toLocalStorage(allObj);

        setTimeout(() => {
          target.parentElement.remove();
        }, 750);
      }
    }
  });

const allObj = fromLocalStorage() || {};

init(allObj);

function init(obj) {
  for (let key in obj) {
    let { text, id } = obj[key];
    createtask(text, id);
  }
}

function createObj(arr) {
  const newObj = {};
  for (let key of arr) {
    newObj[key.id] = key;
  }
  return newObj;
}

document.querySelector(".add-task").addEventListener("click", function(e) {
  const form = document.querySelector(".main-form");
  const inputVal = document.querySelector(".input__text").value;
  const obj = {};

  if (!inputVal) return;

  const randomNum = Math.random();

  obj.id = randomNum;
  obj.text = inputVal;
  allObj[randomNum] = obj;
  form.reset();
  createtask(inputVal, randomNum);
  toLocalStorage(allObj);
});

function createtask(text, id) {
  const fragment = document.createDocumentFragment();
  const mainContainer = document.querySelector(".cards__container");
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.classList.add("custom-control-input");
  checkbox.id = id;

  label.textContent = text;
  label.classList.add("custom-control-label");
  label.setAttribute("for", id);

  div.classList.add("custom-control", "custom-checkbox");
  div.appendChild(checkbox);
  div.appendChild(label);

  fragment.appendChild(div);
  return mainContainer.appendChild(fragment);
}

function toLocalStorage(arr) {
  arr = JSON.stringify(arr);
  localStorage.setItem("obj", arr);
}

function fromLocalStorage() {
  return JSON.parse(localStorage.getItem("obj"));
}
