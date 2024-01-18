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
let dop = document.getElementById("opcions");
dop.appendChild(div);
}

addEventListener("dragstart",)
