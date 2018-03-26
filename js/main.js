function changeEmoji(newEmoji){
	console.log(newEmoji);
	var style = "";
	if(newEmoji === 'happy'){
		style = "url('images/happy.png'), auto";
	}
	else if (newEmoji === 'meh'){
		style = "url('images/meh.png'), auto";
	} else if (newEmoji === 'mad'){
		style = "url('images/madCursor.png'), auto";
	}

	document.getElementById("photos").style.cursor = style;
	document.getElementsByTagName('input');
	console.log("made it");

	var elms = document.getElementsByTagName("input");

	for (var i = 0; i < elms.length; i++){
	    elms[i].onmouseover = function(){
	     	this.style.cursor = style;
	    	console.log("hereerer", style);
	    }
	}
}

function onHover(){
	var background = document.getElementById('background');
	background.style.backgroundColor = "black";

	var buttonText = document.getElementById('btn-text');
	buttonText.style.color = "black";

	var image = document.getElementById('profile-image');
	image.style.visibility = "hidden";
}


function offHover(){
	// var background = document.getElementById('background');
	// background.style.backgroundColor = "white";

	// var image = document.getElementById('profile-image');
	// image.style.visibility = "visible";
}
