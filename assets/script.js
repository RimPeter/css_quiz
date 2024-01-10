// add eventlistener to the start button
document.getElementById("start").addEventListener("click", function () {
  // relocate to gamezone
  window.location.href = "gamezone.html";
});

// eventlistener for fully loaded page
document.addEventListener("DOMContentLoaded", function () {
  // background music
  let audio = document.getElementById("startmusic");

  audio.loop = true;
  // provide sound button
  let soundButton = document.getElementById("sound");
  // function for button text
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
