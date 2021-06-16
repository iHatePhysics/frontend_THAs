const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

setInterval(() => {
    let day = new Date()
    let hours = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()
    
    let hrrotation = (30*hours) + (0.5*minutes);
    let minrotation = 6*minutes;
    let secrotation = 6*seconds;

    hour.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =  `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform = `translate(-50%,-100%) rotate(${secrotation}deg)`
});