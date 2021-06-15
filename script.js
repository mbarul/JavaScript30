const media = document.querySelector("video");
const controls = document.querySelector(".player__controls");
const progress = document.querySelector(".progress__filled");

const play = document.querySelector(".player__button");

//
const rwdBtn = document.querySelector(".player__controls button:nth-child(5)");
const fwdBtn = document.querySelector(".player__controls button:nth-child(6)");
const volumeSlider = document.querySelector('.player__controls input:nth-child(4)');
const speedSlider = document.querySelector('.player__controls input:nth-child(3)');

console.log(speedSlider);

function playPauseMedia() {
  if (media.paused) {
    play.className = "player__button";
    media.play();
  } else {
    play.className = "player__button toggle";
    media.pause();
  }
}
play.onclick = function () {
  playPauseMedia();
};

media.addEventListener("timeupdate", function () {
  let progressPos = media.currentTime / media.duration;
  progress.style.flexBasis = progressPos * 100 + "%";
});
//Rewards event  and function
rwdBtn.onclick = function () {
  media.currentTime -= 10;
};
//Forward event and funtion
fwdBtn.onclick = function () {
  media.currentTime += 25;
};
//Changing volume
volumeSlider.addEventListener('mousemove', setVolume);

function setVolume(){
  media.volume = volumeSlider.value / 100;
}
//Changing speed video
speedSlider.addEventListener('mousemove', setSpeed);

function setSpeed (){
  media.playbackRate = speedSlider.value / 50;
}

console.log(media.playbackRate);

