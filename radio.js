document.addEventListener("DOMContentLoaded", function() {

  function setTime() {
    const now = new Date().toLocaleTimeString('en-GB', { /* weekday: "short", */ hour: "numeric", minute: "numeric", second: "numeric"});
    document.getElementById("time").innerHTML = now;
  }
  function radioOnOff() {
    var isRadioOn = document.querySelector(`div.radio--on`);
    var isRadioOff = document.querySelector(`div.radio--off`);

    if ( isRadioOn.classList.contains('active') ) {
      isRadioOn.classList.remove('active');
      isRadioOff.classList.add('active');
    } else {
      isRadioOn.classList.add('active');
      isRadioOff.classList.remove('active');
    }
  }




  setInterval(setTime, 1000);
  setTime();

  var buttonOnOff = document.querySelector(`li.radio-button--on-off`);

  buttonOnOff.addEventListener("click", radioOnOff);






  // function removeTransition(e) {
  //   if (e.propertyName !== 'box-shadow') return;
  //   e.target.classList.remove('key-pressed');
  // }

  // function keyPlaying(e) {
  //     var keyCod, key, sounds;

  //     if( e.keyCode === undefined ) {
  //       keyCode = e.target.getAttribute("data-key");
  //       key = document.querySelector(`li[data-key="${keyCode}"]`);
  //       sounds = document.querySelector(`audio[data-key="${keyCode}"]`);
  //     } else {
  //       key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  //       sounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //     }

  //     if (!sounds) return;
  //     sounds.currentTime = 0;
  //     sounds.play();
  //     key.classList.add('key-pressed');
  // }


  // var keys = Array.from(document.querySelectorAll('.key'));

  // keys.forEach(function(element) {
  //     element.addEventListener("click", keyPlaying);
  //     element.addEventListener('transitionend', removeTransition);
  // });

  // window.addEventListener('keydown', keyPlaying);
});