/*Programacion de JavaScript*/

var moves = document.getElementsByClassName('move');

var initWidth = [178.83/3,135.25/3,135.89/3,177.56/3,178.84/3,134.61/3];
var initHeight = [178.83/3,135.25/3,135.89/3,177.56/3,178.84/3,134.61/3];
var lastWidth = [178.83,135.25,135.89,177.56,178.84,134.61];
var lastHeight = [121.79,121.79,161.53,161.53,160.89,161.53];
var transX = [-50,-50,-45,-65,-40,-40];
var transY = [-30,-30,-60,-57,-60,-60];
for(var i=0;i<moves.length;i++){
	// moves[i].setAttribute("width", initWidth[i]);
	// moves[i].setAttribute("height",initHeight[i]);
	moves[i].setAttribute("width", initWidth[i]);
	moves[i].setAttribute("height",initHeight[i]);
	moves[i].setAttribute("x", 50+Math.floor(50*i));
	moves[i].setAttribute("y", Math.floor(570));
	// moves[i].setAttribute("onmousedown","seleccionarElemento(evt)");
	moves[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	moves[i].setAttribute("ontouchmove","moveElement(evt)");
}

var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	// console.log("selecccionr")
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
	var flag = false
	var i = elementSelect.id.slice(5) -1
	console.log()
	// if(flag == false){
	// 	var i = elementSelect.id.slice(5) -1
	// 	var w = lastWidth[i];
	// 	var h = lastWidth[i];
	// 	console.log("w = "+w+",h="+h)
	// 	elementSelect.setAttribute("x",currentPosx-w);
	// 	elementSelect.setAttribute("y",currentPosy-h);
	// 	elementSelect.setAttribute("width",lastWidth[i])
	// 	elementSelect.setAttribute("height",lastHeight[i])
	// 	flag = true
	// }
	// elementSelect.setAttribute("width",lastWidth[i])
	// elementSelect.setAttribute("height",lastHeight[i])
	elementSelect.setAttribute("width",lastWidth[i])
	elementSelect.setAttribute("height",lastHeight[i])
	elementSelect.setAttribute("transform","translate("+transX[i]+" "+transY[i]+")")
	var dx = evt.changedTouches[0].clientX - currentX;
	var dy = evt.changedTouches[0].clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	// console.log("x="+elementSelect.getAttribute("x")+",y="+elementSelect.getAttribute("y"))
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	
	currentX = evt.changedTouches[0].clientX;        
	currentY = evt.changedTouches[0].clientY;
	elementSelect.setAttribute("ontouchend","deseleccionarElemento(evt)");
	magnet();
}

function deseleccionarElemento(evt){
	// console.log("deseleccionar")
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
	// console.log("reorg")
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
	norigX = origX[i]-transX[i];
	norigY = origY[i]-transY[i];
	console.log(currentPosx-norigX)
	console.log(currentPosy-norigY)
	if (Math.abs(currentPosx-norigX)<15 && Math.abs(currentPosy-norigY)<15) {
		elementSelect.setAttribute("x",norigX);
		elementSelect.setAttribute("y",norigY);
	}
	// if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
	// 	elementSelect.setAttribute("x",origX[i]);
	// 	elementSelect.setAttribute("y",origY[i]);
	// }
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
	if(bien_ubicada == 6){
		// win.play();
		for(var i=0;i<pieces.length;i++){
			console.log(moves[i])
			for(var i=0;i<moves.length;i++){
				moves[i].removeAttribute("ontouchstart")
				moves[i].removeAttribute("ontouchmove")
				moves[i].removeAttribute("ontouchend")
			}
		}
	}
}
