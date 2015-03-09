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
var mainsong = 'stuff/thugstory.mp3'
var specials = ['stuff/allday.wav', 'stuff/sparks.mp3', 'stuff/space.mp3', 'stuff/places.mp3']
var songselection;
if(Math.random() < 0.3){
	songselection = specials[Math.floor(Math.random()*specials.length)];
} else {
	songselection = mainsong;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-60507572-1', 'auto');
ga('send', 'pageview');