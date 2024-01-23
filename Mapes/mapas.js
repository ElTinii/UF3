//Fet per: Alex Vazquez i Alberto Morcillo
let path = document.querySelectorAll("path"); //Aqui estem obtenint tots els path
let dragged;
let punts = 0;
let errors = 0;
let dop = document.getElementById("opcions");//Obtenim la div on insertem els div per completar el nivell

//El que fem amb aquest foreach es pasar per tot l'array de path i cridar la funcio crearDiv
path.forEach((paths) => {
    let comarca = paths.id;
    crearDiv(comarca);
});
/*
En aquesta funcio agafem la variable que pasem i la transformem en div, li pasem els estils, la id i el nom que volem que tingui 
la nostra div i la pasem a l'HTML.
Una cosa a destacar es que li hem de posar l'atribut draggable a la div per poder-la arrastrar.
@param:Estem pasant la variable comarca que son les comarques que agafem anteriorment per transformem en div
@return:No returno res
 */
function crearDiv(comarca){
let div = document.createElement("div");
div.textContent = comarca;
div.id = comarca;
div.setAttribute("name", comarca + 'b');
div.style = " width: 100px; height: 50px;background-color: #3498db; color: #fff;border: 1px solid #2980b9; border-radius: 5px;margin: 5px;"
div.setAttribute("draggable", "true");
dop.appendChild(div);
}

//Aquest Event Listener s'activa quan comences a arrastrar la div, el que fem es agafar la id del div que estem arrastrant
addEventListener("dragstart", dragStart);
function dragStart(event) {
 dragged = event.target.id;
}

addEventListener("dragover", (event) => {
    event.preventDefault();
});
//Aquest Event Listener s'activa quan tu entras sobre un altre div, nosaltres fem que si el color de fons del mapa es verd o vermell no 
//s'activi, sino se li afegeix el color blau a la propietat fill 
addEventListener("dragenter", (event) => {
    let fill = event.target.getAttribute("fill");
    if(fill !== "green" && fill !== "red"){
        event.target.setAttribute('fill','blue');
    }
});

//Aquest Event Listener s'activa quan surts del div, i fa el mateix que el de enter i el color de fons del mapa es verd o vermell no
//s'activi, sino torna al color d'abans
addEventListener("dragleave", (event) => {
    let fill = event.target.getAttribute("fill");
    if(fill !== 'green' && fill !== 'red'){
        event.target.setAttribute('fill','#eeeeee');
    }
});

//Aquest Event Listener s'activa cuan deixes d'arrosegar el div i el deixas sobre una de les comarques, el que fa es agafar la id de la 
//div on estem, tambe agafem l'atribut que te, comprovem si fem el drop sobre un path si ho estem fent comprovem si la id del div que arrastrem
// es la mateixa fem que canvii el fons a verd i que s'elimini el div, sino comprovem que no estigui en verd, si no ho esta  canvia el fons a 
//vermell i li sumem 1 a error, per ukltim per comprovar que el joc s'ha acabat es fa mirant el recompte de punts si ha pasat de 400 significa
//que s'ha acabat i llavors es mostra en pantalla un alert felicitant a l'usuari e indicant-li els errors que ha fet.
addEventListener("drop", (event) => {
    let dropped =event.target.id;
    let fill = event.target.getAttribute("fill");
     if (event.target.tagName === 'path') {
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
}
    if(punts > 400){
        alert("Molt be  has completat el joc amb " + errors + "  Errors");
    }
});