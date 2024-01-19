let path = document.querySelectorAll("path");
path.forEach((paths) => {
    let comarca = paths.id;
    cerardiv(comarca);
});

function cerardiv(comarca){
let div = document.createElement("div");
div.textContent = comarca;
div.style = " width: 100px; height: 50px;background-color: #3498db; color: #fff;border: 1px solid #2980b9; border-radius: 5px;margin: 5px;"
div.setAttribute("draggable", "true");
div.addEventListener("dragstart", dragStart);
let dop = document.getElementById("opcions");
dop.appendChild(div);
}
let dragged = null;
function dragStart(event) {
    let dragged = event.target;
}

addEventListener("dragover", (event) => {
    event.preventDefault();
});

addEventListener("dragenter", (event) => {
    event.target.classList.add("dragover");
});

addEventListener("dragleave", (event) => {
    event.target.classList.remove("dragover");
});

addEventListener("drop", (event) => {
    if (verd) {
        event.preventDefault();
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
});