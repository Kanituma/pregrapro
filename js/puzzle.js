
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
var nowPuzzle;
var puzzle = document.getElementById('puzzle');
// console.log(pici)
//initialize page
if(winh>=8){
	gap =25;
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



function reorg(evt){
	var piece = evt.target.parentNode;
	var clone = piece.cloneNode(true);
	var id = piece.getAttribute("id");
	puzzle.removeChild(document.getElementById(id));
	puzzle.appendChild(clone);
	return puzzle.lastChild.firstChild;
}

// var origX = [65.65,200.26,65.65,158,64.65,200.2];  
var origX = [67.15,200.26,67.15,158,67.15,200.2];   
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







//信件
var isTip = true;
var isLetter = false;
var num = 0;
var right = document.getElementById("right")
var delaytime =[8000,8000,4200,8000,5000,8000]
function testing(){
	var index = piece1.getAttribute("xlink:href").slice(10,11) -1
	console.log(index)
	if(!isRight.includes(false)){
		isLetter = true;
		$("#p_gif").css("opacity","1")
		$("#puzzle").delay(1500).fadeOut("slow");
		$("#p_gif").css("animation-name","puzzleani")
		setTimeout(function(){
			letterOn();
		},delaytime[index])

		// console.log("win!")
	}
}
function letterOn(){
	if(isLetter){
		$("#p_story").css("opacity","1")
		$("#blackbg").css("opacity","0.3")
		$("#p_tip").css("background-image","url('../images/puzzle_story.png')")
		// $("#blackbg").css("pointer-events","all")
		$("#p_tip").css("z-index","-3")
		isTip = false; 
		$("#p_back").css("z-index","-3")
		$("#p_story").css("pointer-events","all")
		$("#p_share").css("pointer-events","all")
		setTimeout(function(){
			$("#p_gif").css("animation-name","none")
		},1000)
		console.log("letterOn!")
	}
	
}
function letterOff(){
	$("#p_gif").css("animation-name","puzzleani")
	$("#p_story").css("opacity","0")
	$("#blackbg").css("opacity","0")
	$("#p_story").css("pointer-events","none")
	$("#p_share").css("pointer-events","none")
	setTimeout(function(){
		$("#p_tip").css("z-index","0")
		$("#p_back").css("z-index","0")
	},700)
	
	console.log("letterOff!")
}

//back tip button
var backimg = document.getElementById("back");
var p_back = document.getElementById("p_back");
var p_tip = document.getElementById("p_tip");

p_back.onclick = function(){
	$(".page3").fadeOut("slow");
	
	$("#p_gif").css("opacity","0")
	setTimeout(function(){
		reloadPuzzle("reloadpuzzle")
		$("#p_gif").css("animation-name","none")
		puzzle.innerHTML = "<g id=\"back\" opacity=\"0\"><image xlink:href=\"images/p_p6.png\" width=\"268.7\" height=\"361\" x=\"65.65\" y=\"169.5\"></g><g id=\"backframe\"><image xlink:href=\"images/puzzle_lines.png\" width=\"268.7\" height=\"361\" x=\"65.65\" y=\"169.5\"></g><g class=\"piece\" id=\"0\"><image xlink:href=\"images/p6_1.png\" class=\"move\" id=\"piece1\"></image></g><g class=\"piece\" id=\"1\"><image xlink:href=\"images/p6_2.png\" class=\"move\" id=\"piece2\"></image></g><g class=\"piece\" id=\"2\"><image xlink:href=\"images/p6_3.png\" class=\"move\" id=\"piece3\"></image></g><g class=\"piece\" id=\"3\"><image xlink:href=\"images/p6_4.png\" class=\"move\" id=\"piece4\"></image></g><g class=\"piece\" id=\"4\"><image xlink:href=\"images/p6_5.png\" class=\"move\" id=\"piece5\"></image></g><g class=\"piece\" id=\"5\"><image xlink:href=\"images/p6_6.png\" class=\"move\" id=\"piece6\"></image></g>"
	},1000)
	
	
}





p_tip.onclick = function(){
	if(isTip){
		timeOutEvent = setTimeout(function() {    
			timeOutEvent = 0;    
			backimg.setAttribute("opacity",1);  
			// $("#back").fadeIn("slow")
			setTimeout(function(){
				backimg.setAttribute("opacity",0);   
			},2000) 
		}, 100);    
	}else if(!isTip){
		letterOn();
	}
	
}

function reloadPuzzle(id)
{
	isTip = true;
	isLetter = false;
    var oldjs = null; 
    var t = null; 
	var oldjs = document.getElementById(id);
	var newjs = oldjs.src;
    if(oldjs) oldjs.parentNode.removeChild(oldjs); 
    var scriptObj = document.createElement("script"); 
    scriptObj.src = newjs; 
    scriptObj.type = "text/javascript"; 
    scriptObj.id = id; 
	document.getElementsByTagName("head")[0].appendChild(scriptObj);
	letterOff()
	

}

var blackbg = document.getElementById("blackbg");
var p_share = document.getElementById("p_share");
blackbg.onclick = function(){
	letterOff();
	
}
p_share.onclick = function(){
	console.log("share!")
}