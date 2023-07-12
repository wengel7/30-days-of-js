// window.addEventListener('type:DOMString', callback: EventListener, capture?:boolean)
let h = 0;
window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
console.log(e.keyCode)
    if(!audio) return; //no need to play any sound for this key press
    else{
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");

        if(h != e.keyCode){
            audio = document.querySelector(`audio[data-key="${h}"]`);
            key = document.querySelector(`div[data-key="${h}"]`);
            h = e.keyCode;
            if(!key)return;
            else{
                // audio.stop();
                key.classList.remove("playing");
            }
        }
    }
});
