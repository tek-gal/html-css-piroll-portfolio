const video = document.querySelector('.work-process__video .video');
const videoContainer = document.querySelector('.work-process__video.video-container');
const button = document.querySelector('.buttons .buttons__play-pause');

const hide = (element) => element.style.visibility = 'hidden';
const show = (element) => element.style.visibility = 'visible';

const toggleButon = (btn) => {
  btn.classList.toggle('buttons__play');
  btn.classList.toggle('buttons__pause');
};

videoContainer.addEventListener('mouseover', () => {
  show(button);
  setTimeout(() => hide(button), 1500);
});

videoContainer.addEventListener('mouseout', () => hide(button));
videoContainer.addEventListener('mousemove', () => show(button));

button.addEventListener('click', () => button.classList.contains('buttons__play')
  ? video.play()
  : video.pause()
);

const handleButton = (buttonAction, timeout = 1500) => {
  buttonAction(button);
  setTimeout(() => hide(button), 1500);
};

video.addEventListener('play', (e) => toggleButon(button));
video.addEventListener('pause', (e) => toggleButon(button));
video.addEventListener('progress', (e) => console.log(video.buffered));
