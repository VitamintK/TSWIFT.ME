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
var mainsong = 'stuff/allday.wav'
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
	songselection = mainsong;
	document.body.style.backgroundColor= "rgb(210,210,200)";
	document.body.style.backgroundImage = "url('stuff/allday.gif')";
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
	if(song.paused == true){
		//this is for iOS safari and android Chrome because they can't autoplay audio.
		document.getElementById('thebtn').innerHTML = '&#9658;';
	}
}