

const cssHr = document.querySelector(".clock-hour");
const cssMin = document.querySelector(".clock-min");
const cssSec = document.querySelector(".clock-second");

function setTime(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const hrDeg = ((hr / 60) * 360)+ 90;
    const minDeg = ((min / 60) * 360)+ 90;
    const secDeg = ((sec / 60) * 360)+ 90;
    

    cssHr.style.transform = `rotate(${hrDeg}deg)`;
    cssMin.style.transform = `rotate(${minDeg}deg)`;
    cssSec.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(setTime, 1000);