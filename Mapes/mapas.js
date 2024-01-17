let path = document.querySelectorAll("path");
path.forEach((paths) => {
    let comarca = paths.id;
    cerardiv(comarca);
});

function cerardiv(comarca){
let div = document.createElement("div");
div.textContent = comarca;
div.style = "background-color:#FD6848; border: 1px solid black; width:70px;"
let dop = document.getElementById("opcions");
dop.appendChild(div);
}