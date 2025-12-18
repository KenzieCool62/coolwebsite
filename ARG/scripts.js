function goto(link) {
      window.location.href=link
}

function show(id) {
    document.getElementById(id).style.display='block'
}

function hide(id) {
    document.getElementById(id).style.display='none'
}

let clickSound = new Audio('audio/button.mp3');

function playClickSound(audioid) {
  clickSound.src = audioid
  clickSound.currentTime = 0;
  clickSound.play();
}

playClickSound("audio/bass.ogg")

window.addEventListener('click', function() {
  playClickSound("audio/button.ogg")
  /* const clickEffect = this.document.createElement('div');
  clickEffect.id = 'ceffect';
  clickEffect.style.position = 'absolute';
  clickEffect.style.width = '100px';
  clickEffect.style.height = '100px';
  clickEffect.style.backgroundColor = 'green';
  const nx = MouseEvent.pageX;
  const ny = MouseEvent.pageY;
  clickEffect.style.top = 0;
  clickEffect.style.left = 0; */
}, true); 

window.addEventListener('contextmenu', function() {
  playClickSound("audio/clickfast.ogg")
}, true);

const pw = "NULLISLEFTWASHOLMES"