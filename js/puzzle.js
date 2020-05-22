/*Programacion de JavaScript*/

var piezas = document.getElementsByClassName('movil');

var tamWidh = [134/2,192/2,134/2,163/2,134/2,163/2,134/2,192/2,134/2];
var tamHeight = [163/2,134/2,163/2,134/2,192/2,134/2,163/2,134/2,163/2];

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor(30*i));
	piezas[i].setAttribute("y", Math.floor(400));
	// piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
	piezas[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	piezas[i].setAttribute("ontouchmove","moveElement(evt)");
}

var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	console.log("selecccionr")
	// console.log("sdfsdfsdf")
	// console.log(evt.target.getAttribute("x"))
	elementSelect = reorg(evt);
	console.log(elementSelect)
	currentX = evt.changedTouches[0].clientX;        
	currentY = evt.changedTouches[0].clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	// console.log(currentPosx)
	elementSelect.setAttribute("ontouchmove","moveElement(evt)");
}

function moveElement(evt){
	console.log("moveele")
	// console.log("sdf")
	// console.log(elementSelect)
	// console.log(evt.changedTouches[0].clientX)
	var dx = evt.changedTouches[0].clientX - currentX;
	var dy = evt.changedTouches[0].clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	// elementSelect = reorg(evt);
	// console.log("x="+elementSelect.getAttribute("x")+",y="+elementSelect.getAttribute("y"))
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.changedTouches[0].clientX;        
	currentY = evt.changedTouches[0].clientY;
	// elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("ontouchend","deseleccionarElemento(evt)");
	magnet();
}

function deseleccionarElemento(evt){
	console.log("deseleccionar")
	testing();
	if(elementSelect != 0){			
		elementSelect.removeAttribute("ontouchmove");
		// elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("ontouchend");
		elementSelect = 0;
	}
}

var puzzle = document.getElementById('puzzle');

function reorg(evt){
	console.log("reorg")
	var piece = evt.target.parentNode;
	var clone = piece.cloneNode(true);
	var id = piece.getAttribute("id");
	puzzle.removeChild(document.getElementById(id));
	puzzle.appendChild(clone);
	// console.log(evt.target)
	return puzzle.lastChild.firstChild;
}

// var origX = [200,304,466,200,333,437,200,304,466];   
// var origY = [100,100,100,233,204,233,337,366,337];
var origX = [100,151.8,233,100,166,219,100,150,232];   
var origY = [50,50,50,116,102,116,167,182,169];
function magnet(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<8 && Math.abs(currentPosy-origY[i])<8) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
			
// var win = document.getElementById("win");

function testing() {
	var bien_ubicada = 0;
	var pieces = document.getElementsByClassName('piece');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(pieces[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(pieces[i].firstChild.getAttribute("y"));
		ide = pieces[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == 9){
		// win.play();
	}
}
