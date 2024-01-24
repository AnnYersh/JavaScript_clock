let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow =   document.querySelector('.h'),
    hoursBox =    document.querySelector('.hours'),
    minutesBox =  document.querySelector('.minutes');
    

// new Date() - отдает всю информацию о дате и времени
    
function start() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();
        
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => start(), 1000)
        
}

start()


// рекурсия - это когда функция запускает саму себя




// let i = 1

// function loop() {
//     if(i < 100) {
//         console.log(i);
//         i++
//         setTimeout(() => loop(), 1000)
//     } 
// }

// loop()




let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

// СЕКУНДОМЕР

let stopwatchSec = document.querySelector('.stopwatch__seconds'),
    stopwatchMin = document.querySelector('.stopwatch__minutes'),
    stopwatchHour = document.querySelector('.stopwatch__hours'),
    stopWatchBtn = document.querySelector('.stopwatch__btn'),
    stopWatchSpan = document.querySelector('.tabsLink__span')

    let i=0,
        t=1,
        x=1

    stopWatchBtn.addEventListener ('click', () => {
        if(stopWatchBtn.innerHTML == "start") {
        stopWatchSpan.classList.add('active');
        stopWatchBtn.innerHTML = "stop";
        loop(stopWatchBtn, i, t, x)
        } else if (stopWatchBtn.innerHTML == "stop") {
            stopWatchSpan.classList.remove('active');
            stopWatchSpan.classList.add('active_clear');
            stopWatchBtn.innerHTML = "clear";  
        } else {
            stopWatchSpan.classList.remove('active_clear');
            stopWatchBtn.innerHTML = "start";  
            stopwatchSec.innerHTML = 0;
            stopwatchMin.innerHTML = 0;
            stopwatchHour.innerHTML = 0;  
        }
    })

function loop(button, i, t, x) {
    if (button.innerHTML == 'stop') {
        if(i<60) {
            stopwatchSec.innerHTML = i;
            i++ 
            } else if (i==60) {
                i=0
                stopwatchSec.innerHTML = (i);
                i++
                stopwatchMin.innerHTML = t;
                t++
                    if (t==61) {
                    t=0
                    stopwatchMin.innerHTML = t;
                    t++
                    stopwatchHour.innerHTML = x;
                    x++
                    }
                }  
        setTimeout(() => loop(button, i, t, x), 1000)  
    }
}

