// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
var timer = setInterval(checkGauges, 1000);
var a = document.getElementById("left");
var b = document.getElementById("right");
var c = document.getElementById("button1");
var key = document.getElementById("keybox");


function nextImage(el){
	if (a.src.match("images/gauge1.png")){
		a.src = "images/gauge2.png";
	} else if (a.src.match("images/gauge2.png")){
		a.src = "images/gauge3.png";
	} else if (a.src.match("images/gauge3.png")){
		a.src = "images/gauge4.png";
	}
}
function botImage(el){
	if (a.src.match("images/gauge4.png")){
		a.src = "images/gauge3.png";
	} else if (a.src.match("images/gauge3.png")){
		a.src = "images/gauge2.png";
	} else if (a.src.match("images/gauge2.png")){
		a.src = "images/gauge1.png";
	} 
}
function nextImage2(el){
	if (b.src.match("images/gauge1.png")){
		b.src = "images/gauge2.png";
	} else if (b.src.match("images/gauge2.png")){
		b.src = "images/gauge3.png";
	} else if (b.src.match("images/gauge3.png")){
		b.src = "images/gauge4.png";
	}
}	
function botImage2(el){
	if (b.src.match("images/gauge4.png")){
		b.src = "images/gauge3.png";
	} else if (b.src.match("images/gauge3.png")){
		b.src = "images/gauge2.png";
	} else if (b.src.match("images/gauge2.png")){
		b.src = "images/gauge1.png";
	} 
}

function checkGauges(){
	if (a.src.match("images/gauge4.png") && b.src.match("images/gauge2.png")){
		key.src = "images/key.png";
		c.classList.remove("opaque");
	} 
}
function finalPage(){
		window.location.href = 'end.html';
	}
function loopBack(){
		window.location.href = "https://macielegaspi.github.io/gulagescape/gulagescape/";
	}

		