// Access Elements
const heading = document.getElementById("mainHeading");
const paragraph = document.querySelector(".text");
const buttons = document.querySelectorAll("button");

const changeBtn = document.getElementById("changeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("list");

// Change Text on Button Click
changeBtn.addEventListener("click", function () {
    heading.textContent = "GOOD MORNING";
    paragraph.textContent = "I AM FINE WHAT ABOUT YOU!!!!!.";

    // Change Styles Dynamically
    document.body.style.backgroundColor = "#f0f4ff";
    heading.style.color = "#4361ee";
    heading.style.fontSize = "32px";
    paragraph.style.color = "#333";
});

//Show / Hide Element
toggleBtn.addEventListener("click", function () {
    paragraph.classList.toggle("hidden");
});

// Add New Element Dynamically
let count = 2;

addItemBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
    count++;
});