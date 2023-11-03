var contaner = document.querySelector("[contaner]");
var btn = document.querySelector([btn]);
function boomContent() {
  contaner.classList.toggle("show");
}
btn.addEventListener("click", boomContent);
var blusButton = document.querySelector(".blusButton");
var inputField = document.querySelector(".inputField");
var toDoContaner = document.querySelector("#toDoContaner");
var remover = document.querySelector(".remover");
function intermsg() {
  var paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  toDoContaner.appendChild(paragraph);
  inputField.value = "";
  paragraph.classList.add("paragaph-styling");
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContaner.removeChild(paragraph);
  });
}


blusButton.addEventListener("click", intermsg);
document.querySelector(".inputField").oninput = function () {
  console.log(this.value);
  window.sessionStorage.setItem("inputField", inputField.value);
};
inputField.value = window.sessionStorage.getItem("inputField");