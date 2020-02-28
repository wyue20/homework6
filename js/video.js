var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML= video.volume *100 +"%";
	console.log("Play Video");
	console.log(video.volume)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	var vid = document.getElementById('myVideo');
	vid.playbackRate=0.5;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	var vid = document.getElementById('myVideo');
	vid.playbackRate=2;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("Current location is " + video.currentTime);
} 

function mute() { 
	let mute = document.querySelector("#mute");
	if (video.muted){
		  console.log("Changing to Unmuted");
		  video.muted = false;
		  mute.innerHTML = "Mute";
	}
	else{
		  console.log("Changing to Muted");
		  video.muted = true;
		  mute.innerHTML = "Unmute";
	}
}

function changeVolume() {
	video.volume = document.querySelector("#volumeSlider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

;	console.log("Volume is " + volume*100);
}
       

function gray() { 
	let video = document.querySelector("#myVideo");
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	document.querySelector("#myVideo");
	video.classList.remove("grayscale");
	console.log("In color") 
}
