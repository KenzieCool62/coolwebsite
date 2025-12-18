function goto(link) {
      window.location.href=link
}

function toggleDisplay(id, prevDisplay) {
    const element = document.getElementById(id)
    if (element.style.display == "none") {
        element.style.display=prevDisplay
    } else {
        document.getElementById(id).style.display='none'
    };
    
 
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

document.getElementById('banner').onclick(goto("images/banner(1).png"));

const pw = "NULLISLEFTWASHOLMES"