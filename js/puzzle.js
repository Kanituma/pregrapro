
var moves = document.getElementsByClassName('move');
var piece1 = document.getElementById("piece1")
var piece2 = document.getElementById("piece2")
var piece3 = document.getElementById("piece3")
var piece4 = document.getElementById("piece4")
var piece5 = document.getElementById("piece5")
var piece6 = document.getElementById("piece6")
var pieces = [piece1,piece2,piece3,piece4,piece5,piece6]
var initWidth = [178.83/3,135.25/3,135.89/3,177.56/3,178.84/3,134.61/3];
var initHeight = [178.83/3,135.25/3,135.89/3,177.56/3,178.84/3,134.61/3];
var lastWidth = [178.83,135.25,135.89,177.56,178.84,134.61];
var lastHeight = [121.79,121.79,161.53,161.53,160.89,161.53];
var transX = [-50,-50,-45,-65,-40,-40];
var transY = [-30,-30,-60,-57,-60,-60];
for(var i=0;i<moves.length;i++){
	moves[i].setAttribute("width", initWidth[i]);
	moves[i].setAttribute("height",initHeight[i]);
	moves[i].setAttribute("x", 50+Math.floor(50*i));
	moves[i].setAttribute("y", Math.floor(570));
	moves[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	moves[i].setAttribute("ontouchmove","moveElement(evt)");
}

var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	evt.preventDefault()
	console.log(evt)
	elementSelect = reorg(evt);
	
	currentX = evt.changedTouches[0].clientX;        
	currentY = evt.changedTouches[0].clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("ontouchmove","moveElement(evt)");
}

function moveElement(evt){
	evt.preventDefault()
	var flag = false
	var i = elementSelect.id.slice(5) -1
	elementSelect.setAttribute("width",lastWidth[i])
	elementSelect.setAttribute("height",lastHeight[i])
	elementSelect.setAttribute("transform","translate("+transX[i]+" "+transY[i]+")")
	var dx = evt.changedTouches[0].clientX - currentX;
	var dy = evt.changedTouches[0].clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	
	currentX = evt.changedTouches[0].clientX;        
	currentY = evt.changedTouches[0].clientY;
	
	// elementSelect.setAttribute("ontouchend","deselectElement(evt)");
	// elementSelect.setAttribute("ontouchcancel","deselectElement(evt)");
	magnet();
}

function deselectElement(evt){
	// console.log("sd")
	testing();
	
	if(elementSelect != 0){			
		elementSelect.removeAttribute("ontouchmove");
		elementSelect.removeAttribute("ontouchend");
		elementSelect.removeAttribute("ontouchcancel");
		elementSelect = 0;
	}
}

var puzzle = document.getElementById('puzzle');

function reorg(evt){
	var piece = evt.target.parentNode;
	var clone = piece.cloneNode(true);
	var id = piece.getAttribute("id");
	puzzle.removeChild(document.getElementById(id));
	puzzle.appendChild(clone);
	return puzzle.lastChild.firstChild;
}

var origX = [65.65,200.26,65.65,158,64.65,200.2];   
var origY = [169.5,169.5,250.55,250.55,370.55,370.55];
var isRight = [false,false,false,false,false,false]
var norigX,norigY
function magnet(){
	// console.log(elementSelect.id)
	// var pieces = document.getElementsByClassName("piece")
	var nowi= elementSelect.id.slice(5) -1;
	norigX = origX[nowi]-transX[nowi];
	norigY = origY[nowi]-transY[nowi];
	
	if (Math.abs(currentPosx-norigX)<20 && Math.abs(currentPosy-norigY)<20) {
		// console.log(elementSelect)
		// console.log(nowi)
		elementSelect.setAttribute("x",norigX);
		elementSelect.setAttribute("y",norigY);
		right.play();
		// console.log(pieces)
		// console.log("winwinwin")
		// console.log(moves)
		// console.log($("piece"+(nowi+1)))
		// console.log($("#piece"+(nowi)))
		// console.log(pieces[nowi])
		var nowpiece = pieces[nowi];
		isRight[nowi] = true;
		nowpiece.removeAttribute("ontouchmove")
		nowpiece.removeAttribute("ontouchstart")
		nowpiece.removeAttribute("ontouchend")
		nowpiece.removeAttribute("ontouchcancel")
		// console.log(nowpiece.parentNode)
		testing();
		return i;
		// moves[i].removeAttribute("ontouchstart")
		// moves[i].removeAttribute("ontouchmove")
		// moves[i].removeAttribute("ontouchend")
	}
}
var num = 0;
var right = document.getElementById("right")
function testing(){
	console.log(isRight)
	if(!isRight.includes(false)){
		
		console.log("win!")
	}
}
// function testing() {
// 	// console.log("sdf")
// 	console.log(elementSelect)
	
// 	var pieces = document.getElementsByClassName('piece');
// 	for(var i=0;i<pieces.length;i++){
// 		var posx = parseFloat(pieces[i].firstChild.getAttribute("x"));    
// 		var posy = parseFloat(pieces[i].firstChild.getAttribute("y"));
// 		ids = pieces[i].getAttribute("id");
// 		console.log("sdf")
// 		console.log(i)
// 		if(norigX == posx && norigY == posy){
// 			num = num + 1;
// 			// alert("win!")
// 			right.play();
// 			moves[i].removeAttribute("ontouchstart")
// 			moves[i].removeAttribute("ontouchmove")
// 			moves[i].removeAttribute("ontouchend")
// 			moves[i].removeAttribute("ontouchcancel")
// 		}
// 	}
// 	console.log
// 	if(num == 6){
		
// 		console.log("win!")
// 		for(var i=0;i<pieces.length;i++){
// 			console.log(moves[i])
// 			for(var i=0;i<moves.length;i++){
				
// 			}
// 		}
// 	}
// }
