// eventlistener for restart
document.getElementById("restart").addEventListener("click", function () {
  // relocate to starting page
  window.location.href = "index.html";
});
// eventlistener for the fully loaded page
document.addEventListener("DOMContentLoaded", function () {
  // sad music audio
  let audio = document.getElementById("sadmusic");

  audio.loop = true;
  // create control for user to background music
  let soundButton = document.getElementById("sound");

  soundButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      soundButton.textContent = "Sound is ON";
    } else {
      audio.pause();
      soundButton.textContent = "Sound is OFF";
    }
  });
});
