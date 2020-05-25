
var moves = document.getElementsByClassName('move');
var piece1 = document.getElementById("piece1")
var piece2 = document.getElementById("piece2")
var piece3 = document.getElementById("piece3")
var piece4 = document.getElementById("piece4")
var piece5 = document.getElementById("piece5")
var piece6 = document.getElementById("piece6")
var pieces = [piece1,piece2,piece3,piece4,piece5,piece6]
var initWidth = [178.83/3.5,135.25/3.5,135.89/3.5,177.56/3.5,178.84/3.5,134.61/3.5];
var initHeight = [121.79/3.5,121.79/3.5,161.53/3.5,161.53/3.5,160.89/3.5,161.53/3.5];
var lastWidth = [178.83,135.25,135.89,177.56,178.84,134.61];
var lastHeight = [121.79,121.79,161.53,161.53,160.89,161.53];
var initX=[147,50,258,300,203,100];
var initY= [570,569,560,560,559,559];
var transX = [-50,-50,-45,-65,-40,-40];
var transY = [-30,-30,-60,-57,-60,-60];
var winh = Math.floor(innerHeight/100)
var gap = 0;
// console.log(pici)
//initialize page
if(winh>=8){
	gap =25;
	$("#p_title").css("top","16vh")
}
for(var i=0;i<moves.length;i++){
	moves[i].setAttribute("width", initWidth[i]);
	moves[i].setAttribute("height",initHeight[i]);
	moves[i].setAttribute("x",initX[i]);
	moves[i].setAttribute("y",initY[i]+gap);
	moves[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
	moves[i].setAttribute("ontouchmove","moveElement(evt)");
}


//puzzle.js
var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	evt.preventDefault()
	// console.log(evt)
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
	
	magnet();
}

function deselectElement(evt){
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

// var origX = [65.65,200.26,65.65,158,64.65,200.2];  
var origX = [66.65,200.26,66.65,158,66.65,200.2];   
var origY = [169.5,169.5,250.55,250.55,370.55,370.55];
var isRight = [false,false,false,false,false,false]
var norigX,norigY
function magnet(){
	var nowi= elementSelect.id.slice(5) -1;
	norigX = origX[nowi]-transX[nowi];
	norigY = origY[nowi]-transY[nowi];
	
	if (Math.abs(currentPosx-norigX)<20 && Math.abs(currentPosy-norigY)<20) {
		elementSelect.setAttribute("x",norigX);
		elementSelect.setAttribute("y",norigY);
		
		var nowpiece = pieces[nowi];
		isRight[nowi] = true;
		nowpiece.removeAttribute("ontouchmove")
		nowpiece.removeAttribute("ontouchstart")
		nowpiece.removeAttribute("ontouchend")
		nowpiece.removeAttribute("ontouchcancel")
		testing();
		setTimeout(function(){
			right.play();
		},100)
		return i;
		// moves[i].removeAttribute("ontouchstart")
		// moves[i].removeAttribute("ontouchmove")
		// moves[i].removeAttribute("ontouchend")
	}
}
var num = 0;
var right = document.getElementById("right")
function testing(){
	// console.log(isRight)
	if(!isRight.includes(false)){
		$("#p_gif").css("opacity","1")
		$("#puzzle").delay(1500).fadeOut("slow");
		$("#p_gif").css("animation","puzzleani 3s 2s steps(30) both")
		// console.log("win!")
	}
}

//back tip button
var backimg = document.getElementById("back");
var p_back = document.getElementById("p_back");
var p_tip = document.getElementById("p_tip");
p_back.onclick = function(){
	$(".page3").fadeOut("slow");
}
p_tip.ontouchstart = function(){
	timeOutEvent = setTimeout(function() {    
		timeOutEvent = 0;    
		backimg.setAttribute("opacity",1);  
		// $("#back").fadeIn("slow")
		setTimeout(function(){
			backimg.setAttribute("opacity",0);   
		},2000) 
	}, 100);    
}