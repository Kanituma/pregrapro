/*Programacion de JavaScript*/

var pieces = document.getElementsByClassName('move');

var initWidth = [279/6,192/3,134/3,163/3,134/3,163/3,134/3];
var initHeight = [190/6,134/3,163/3,134/3,192/3,134/3,163/3];
var lastWidth = [178.83,135.25,135.89,177.56,178.84,134.61];
var lastHeight = [121.79,121.79,161.53,161.53,160.89,161.53];
for(var i=0;i<pieces.length;i++){
	pieces[i].setAttribute("width", initWidth[i]);
	pieces[i].setAttribute("height",initHeight[i]);
	pieces[i].setAttribute("x", 50+Math.floor(50*i));
	pieces[i].setAttribute("y", Math.floor(570));
	// pieces[i].setAttribute("onmousedown","seleccionarElemento(evt)");
	pieces[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	pieces[i].setAttribute("ontouchmove","moveElement(evt)");
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
	var i = elementSelect.id.slice(5) -1
	console.log(i)
	elementSelect.setAttribute("width",lastWidth[i])
	elementSelect.setAttribute("height",lastHeight[i])
	console.log("moveele")
	// console.log("sdf")
	// console.log(elementSelect)
	// console.log(evt.changedTouches[0].clientX)
	var dx = evt.changedTouches[0].clientX - currentX;
	var dy = evt.changedTouches[0].clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	// elementSelect = reorg(evt);
	console.log("x="+elementSelect.getAttribute("x")+",y="+elementSelect.getAttribute("y"))
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
var origX = [65.65,200.26,65.65,158,64.65,200.2];   
var origY = [169.5,169.5,250.55,250.55,370.55,370.55];
function magnet(){
	var i= elementSelect.id.slice(5) -1;
	if (Math.abs(currentPosx-origX[i])<10 && Math.abs(currentPosy-origY[i])<10) {
		elementSelect.setAttribute("x",origX[i]);
		elementSelect.setAttribute("y",origY[i]);
	}
}
			
// var win = document.getElementById("win");

function testing() {
	var bien_ubicada = 0;
	var pieces = document.getElementsByClassName('piece');
	for(var i=0;i<pieces.length;i++){
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
