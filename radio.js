document.addEventListener("DOMContentLoaded", function() {

  var tune = document.querySelector(`audio`);
  // Alarm clock

  function setTime() {
    const now = new Date().toLocaleTimeString('en-GB', { /* weekday: "short", */ hour: "numeric", minute: "numeric", second: "numeric"});
    document.getElementById("time").innerHTML = now;
  }

  setInterval(setTime, 1000);
  setTime();
  
  // Radio ON/OFF
  function radioOnOff() {
    var isRadioOn = document.querySelector(`div.radio--on`);
    var isRadioOff = document.querySelector(`div.radio--off`);

    if ( isRadioOn.classList.contains('active') ) {
      isRadioOn.classList.remove('active');
      isRadioOff.classList.add('active');
      tune.pause();
    } else {
      isRadioOn.classList.add('active');
      isRadioOff.classList.remove('active');
      playAudio();
    }
  }
  var buttonOnOff = document.querySelector(`li.radio-button--on-off`);
  buttonOnOff.addEventListener("click", radioOnOff);

  // Volume control
  var volumeUp = document.querySelector(`li.radio-button--volume-up`);
  var volumeDown = document.querySelector(`li.radio-button--volume-down`);

  volumeDown.addEventListener("click", turnDownVolume);
  volumeUp.addEventListener("click", turnUpVolume);

  function turnUpVolume() {
    if(tune.volume < 1.0) {
      tune.volume = tune.volume + 0.1;
      console.log("volume Up: " + tune.volume);
    }
  }

  function turnDownVolume() {
    if (tune.volume >= 0.2) {
      tune.volume = tune.volume - 0.1;
      console.log("volume Down: " + tune.volume);
    } 
  }


  // Play audio
  function playAudio() {
    if (!tune) return;
      tune.currentTime = 0;
      tune.play();
  }
});