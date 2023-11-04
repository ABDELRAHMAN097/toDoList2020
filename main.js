var contaner = document.querySelector(".contaner");
var plusButton = document.querySelector(".plusButton");
var inputField = document.querySelector(".inputField");
var toDoContaner = document.querySelector("#toDoContaner");
var remover = document.querySelector(".remover");

plusButton.addEventListener("click", function(){
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragaph-styling");
  paragraph.innerText = inputField.value;
  toDoContaner.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("dblclick", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContaner.removeChild(paragraph);
  });
})  
