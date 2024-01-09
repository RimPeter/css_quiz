document.getElementById('start').addEventListener('click', function() {
window.location.href = 'gamezone.html';
});



document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("startmusic");

  audio.loop = true;
  console.log("sound");
  audio.play();

  let soundButton = document.getElementById("sound");

  soundButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      soundButton.textContent = "Sound Off";
    } else {
      audio.pause();
      soundButton.textContent = "Sound On";
    }
  });
});