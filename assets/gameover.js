document.getElementById("restart").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("sadmusic");

  audio.loop = true;
  console.log("sound");
  // audio.play();

  let soundButton = document.getElementById("sound");

  soundButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      soundButton.textContent = "Sound OFF";
    } else {
      audio.pause();
      soundButton.textContent = "Sound ON";
    }
  });
});
