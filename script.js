const toggleNavBtn = document.getElementById('toggleNavBtn');
const navMenu = document.getElementById('navMenu');
const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('backgroundAudio');

const wordContent = document.getElementById('wordContent');
const pictureContent = document.getElementById('pictureContent');

toggleNavBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

musicBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicBtn.innerHTML = '&#10074;&#10074;';
    musicBtn.title = 'Pause Music';
  } else {
    audio.pause();
    musicBtn.innerHTML = '&#9658;';
    musicBtn.title = 'Play Music';
  }
});

document.getElementById('navWord').addEventListener('click', () => {
  const isVisible = !wordContent.classList.contains('hidden');
  wordContent.classList.toggle('hidden', isVisible);
  pictureContent.classList.add('hidden');
  navMenu.classList.remove('show');
});

document.getElementById('navPicture').addEventListener('click', () => {
  const isVisible = !pictureContent.classList.contains('hidden');
  pictureContent.classList.toggle('hidden', isVisible);
  wordContent.classList.add('hidden');
  navMenu.classList.remove('show');
});
