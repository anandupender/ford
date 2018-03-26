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
