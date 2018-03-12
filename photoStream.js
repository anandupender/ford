// var audio = $("#audio1")[0];
// document.getElementById("card1").addEventListener("mouseover", function( event ) {   
// 	audio.play();
// }, false);

// document.getElementById("card1").addEventListener("mouseleave", function( event ) {   
// 	audio.pause();
// }, false);


var audios = document.getElementsByClassName("info-card");
for(var i = 0; i < audios.length; i++){
  	audios.item(i).addEventListener("mouseover", function( event ) { 
		console.log(this.children[0]);
		var audio = this.children[0]
		audio.play();
	}, false);
	audios.item(i).addEventListener("mouseleave", function( event ) { 
		console.log(this.children[0]);
		var audio = this.children[0]
		audio.pause();
	}, false);
}
