var modal = document.getElementById('modal');
modal.style.display = 'flex';
modal.style.alignItems = 'center';

var audios = document.getElementsByClassName("info-card");
for(var i = 0; i < audios.length; i++){
  	audios.item(i).addEventListener("mouseenter", function( event ) {
		var audio = this.children[0]
    var playPromise = audio.play();

    if (playPromise !== undefined) {
    playPromise.then(_ => {

      console.log("worked");
    })
    .catch(error => {
      console.log(error.message);
    });
  }

	}, false);
	audios.item(i).addEventListener("mouseleave", function( event ) {
		var audio = this.children[0]
		audio.pause();
	}, false);
}
