// Задача 1

const counter = (parent) => {
  return parent.childElementCount;
};
const message = (elements) => {
  elements.forEach((element) => {
    const firstElem = element.firstElementChild;
    const secondElem = firstElem.nextElementSibling;
    console.log(`Category: ${firstElem.textContent}`);
    console.log(`Elements: ${counter(secondElem)}`);
  });
};
const categories = document.querySelector("#categories");
const subCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);

// Задача 2

let ul = document.getElementById("ingredients");

let ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let elList = [];
ingredients.forEach(function (element) {
  let li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  elList.push(li);
});
ul.append(...elList);

// Задача 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  `afterbegin`,
  images
    .map(
      (img) =>
        `<li>
    <img
    src="${img.url}" 
    alt="${img.alt}">
    </li>`
    )
    .join("")
);

// Задача 4

let counterValue = 0;

let counterValueSpan = document.querySelector("#value");

let buttonDec = document.querySelector("button[data-action=decrement]");
let buttonInc = document.querySelector("button[data-action=increment]");

buttonDec.addEventListener("click", (e) => {
  counterValue -= 1;
  counterValueSpan.textContent = counterValue;
});

buttonInc.addEventListener("click", (e) => {
  counterValue += 1;
  counterValueSpan.textContent = counterValue;
});

//Задача 5

let inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (e) => {
  if (e.currentTarget.value != "") {
    outputName.textContent = e.currentTarget.value;
  } else {
    outputName.textContent = "Anonymous";
  }
});

// Задача 6
const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

// Задача 7

const inputTextRef = document.querySelector("#text");
const inputControlRef = document.querySelector("#font-size-control");

inputControlRef.addEventListener("input", (event) => {
  inputTextRef.style.fontSize = inputControlRef.value + "px";
});

// Задача 8

const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
});

// Задача 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;

  color.textContent = randomColor;
});
