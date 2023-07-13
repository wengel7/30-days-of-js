// window.addEventListener('type:DOMString', callback: EventListener, capture?:boolean)

window.addEventListener('keydown', keys);

function keys(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; //no need to play any sound for this key press
    else{
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");

        function removeTransition(e){
            if(e.propertyName != 'transform')return;
            else{
                this.classList.remove('playing');
            }
        }

        const keys = document.querySelectorAll(`.key`);
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    }
}