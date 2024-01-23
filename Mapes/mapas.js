let path = document.querySelectorAll("path");
let dragged;
let punts = 0;
let errors = 0;
let dop = document.getElementById("opcions");

path.forEach((paths) => {
    let comarca = paths.id;
    cerardiv(comarca);
});

function cerardiv(comarca){
let div = document.createElement("div");
div.textContent = comarca;
div.id = comarca;
div.setAttribute("name", comarca + 'b');
div.style = " width: 100px; height: 50px;background-color: #3498db; color: #fff;border: 1px solid #2980b9; border-radius: 5px;margin: 5px;"
div.setAttribute("draggable", "true");
dop.appendChild(div);
}

addEventListener("dragstart", dragStart);
function dragStart(event) {
 dragged = event.target.id;
}
addEventListener("dragover", (event) => {
    event.preventDefault();
});

addEventListener("dragenter", (event) => {
    let fill = event.target.getAttribute("fill");
    if(fill !== "green" && fill !== "red"){
        event.target.setAttribute('fill','blue');
    }
});

addEventListener("dragleave", (event) => {
    let fill = event.target.getAttribute("fill");
    if(fill !== 'green' && fill !== 'red'){
        event.target.setAttribute('fill','#eeeeee');
    }
});

addEventListener("drop", (event) => {
    let dropped =event.target.id;
    let fill = event.target.getAttribute("fill");
    if (dragged == dropped) {
        event.target.setAttribute('fill','green');
        let eliminar = document.getElementsByName(dropped + 'b')[0];
        eliminar.remove();
        punts = punts + 10;
    }else{
        if(fill !== 'green'){
        event.target.setAttribute('fill','red');
        }
        errors = errors + 1;
    }
    if(punts > 400){
        alert("Molt be "+ nom + " has completat el joc amb " + errors + "  Errors");
    }
});