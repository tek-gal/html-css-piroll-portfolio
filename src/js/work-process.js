const video = document.querySelector('.work-process__video .video');
const videoContainer = document.querySelector('.work-process__video.video-container');
const button = document.querySelector('.buttons .buttons__play-pause');
const progress = document.querySelector('.work-process__video .bar');

const hide = (element) => element.style.visibility = 'hidden';
const show = (element) => element.style.visibility = 'visible';

const toggleButon = (btn) => {
  btn.classList.toggle('buttons__play');
  btn.classList.toggle('buttons__pause');
};

videoContainer.addEventListener('mouseenter', () => show(button));
videoContainer.addEventListener('mousemove', () => show(button));
videoContainer.addEventListener('mouseleave', () => hide(button));

button.addEventListener('click', () => button.classList.contains('buttons__play')
  ? video.play()
  : video.pause()
);

video.addEventListener('play', (e) => {
  toggleButon(button);
  show(progress);
});
video.addEventListener('pause', (e) => {
  toggleButon(button);
  hide(progress);
});
video.addEventListener('timeupdate', (e) => {
  const { duration, currentTime } = video;
  const timeFr = currentTime/duration;
  progress.style.width = `${timeFr*100}%`;
});
