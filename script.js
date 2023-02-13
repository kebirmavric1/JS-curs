let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top')

const animateCrashOrRide = () => {

    crashRide.style.transform = 'rotate(0deg) scale(1,5)'
};
const animateHiHatClosed = () => {
    hiHatTop.style.top = '170px';
}

window.addEventListener("keydown",(event) => {
   let code = event.keyCode;
   let keyElement = document.querySelector(`div[data-key="${code}"]`)
   
   if(!keyElement) return;

   let audio = document.querySelector(`audio[data-key="${code}"]`);
   audio.currentTime = 0;
   audio.play();

   switch(code) {
    case 69:
    case 82:
        animateCrashOrRide();
        break;
        case 75:
            animateHiHatClosed();
    }

});

const removeCrashRideTransition = e => {
    if(e.propretyName !== 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

const removeHiHaTopTransition = e => {
    if(e.propretyName !== 'top') return;

    e.target.classList.remove('playing');
}

crashRide.addEventListener("transitionend", removeCrashRideTransition)
hiHatTop.addEventListener("transitionend", removeHiHaTopTransition);
