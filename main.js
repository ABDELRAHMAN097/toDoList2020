var contaner = document.querySelector(".contaner");
var btn = document.querySelector(".btn")
function boomContent (){
    contaner.classList.toggle("show")
}
btn.addEventListener("click",boomContent)

var blusButton =document.querySelector(".blusButton");
var inputField =document.querySelector(".inputField");
var toDoContaner = document.querySelector("#toDoContaner");



function intermsg (){
    var paragraph = document.createElement('p');
    paragraph.innerText=inputField.value;
    toDoContaner.appendChild(paragraph);
    inputField.value='';
    paragraph.classList.add('paragaph-styling');
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration='line-through'
    }) 
    paragraph.addEventListener('dblclick' , function(){
        toDoContaner.removeChild(paragraph)
    }) 
    var button = createElement('button')
    button.innerText='button'
    button.classList.add('remove-button')
    paragraph.appendChild(button)
}

blusButton.addEventListener("click",intermsg);
// function interBox (){
//     var paragraph = document.createElement('p');;
//     paragraph.classList.add("paragaph-styling");
//     paragraph.innerText = inputField.value;
//     toDoContaner.appendChild(paragraph);
//     inputField.value="";
//     paragraph.addEventListener("click" , function(){
//         paragraph.style.textDecoration='line-through'
//     })
//     paragraph.addEventListener("dblclick" , function(){
//         toDoContaner.removeChild(paragraph)
//     })
// }

// blusButton.addEventListener("click", interBox);
