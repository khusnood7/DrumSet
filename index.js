// Get all the drum pads
const pads = document.querySelectorAll('.drum-pad');

// Add click event listener to each pad
pads.forEach(pad => {
  pad.addEventListener('click', () => {
    // Get the audio element within the pad
    const audio = pad.querySelector('audio');
    // Set the audio to the beginning
    audio.currentTime = 0;
    // Play the audio
    audio.play();
  });
});
