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

let ulImages = document.querySelector(".gallery");
let galleryElList = [];
images.forEach(function (element) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", element.url);
  img.setAttribute("alt", element.alt);
  li.appendChild(img);
  galleryElList.push(li);
});
ulImages.append(...galleryElList);

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