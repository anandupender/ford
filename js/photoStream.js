var audios = document.getElementsByClassName("info-card");
for(var i = 0; i < audios.length; i++){
  	audios.item(i).addEventListener("mouseenter", function( event ) {
		var audio = this.children[0]
    var playPromise = audio.play();
    if (playPromise !== null){
      playPromise.catch(() => { audio.play(); })
    }
	}, false);
	audios.item(i).addEventListener("mouseleave", function( event ) {
		var audio = this.children[0]
		audio.pause();
	}, false);
}
