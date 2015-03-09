function toggle(el){
	if(!song.paused){
		song.pause();
		el.innerHTML = '&#9658;'
	}else{
		console.log('hi')
		song.play();
		el.innerHTML = '&#10073;&#10073;'
	}
}

var pic = 'stuff/smile.png'
var mainsong = 'stuff/thugstory.mp3'
var specials = ['stuff/allday.wav', 'stuff/sparks.mp3', 'stuff/space.mp3', 'stuff/places.mp3']
var songselection;
var probability = 0.3;
var secondPlaythrough = false;

function randpic(){
	if(Math.random() < 0.4){
		pic = 'pol/' + (Math.floor(Math.random() * 60)).toString()
	}
}

function setrandpic(){
	randpic();
	tpic.src = pic;
}

function pickSong(){
	if(Math.random() < probability || secondPlaythrough == true){
		songselection = specials[Math.floor(Math.random()*specials.length)];
	} else {
		songselection = mainsong;
	}
	if(songselection == 'stuff/allday.wav'){
		//alert('allday');
		document.body.style.backgroundImage = "url('stuff/allday.gif')";
		alert('allday');
	} else {
		document.body.style.background= "rgb(210,210,200)";
	}
}
pickSong();
secondPlaythrough = true;

window.onload = function(){
	song.addEventListener("ended", function(){
		pickSong();
		song.src = songselection;
		secondPlaythrough = false;
		setrandpic();
	});
}