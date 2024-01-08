document.getElementById('start').addEventListener('click', function() {
window.location.href = 'gamezone.html';
});

document.addEventListener("DOMContentLoaded", function() {
    // Create audio element
    console.log("loaded")
    //  var audio = new Audio('../assets/sound/start_page_soundtrack.mp3');
    
    // Set audio to play in loop
    audio.loop = true;

    // Play the audio
    audio.play();
});
