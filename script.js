window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let lapCount = 1;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#Start');
    let stopBtn = document.querySelector('#Stop');
    let resetBtn = document.querySelector('#Reset');
    let lapBtn = document.querySelector('#Lap');
    let lapList = document.querySelector('#lapList');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens > 99)
        {
            tens = 0;
            seconds++;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
            }
        }

        appendTens.innerHTML = (tens < 10 ? '0' : '') + tens;
        appendSeconds.innerHTML = (seconds < 10 ? '0' : '') + seconds;
        appendMinutes.innerHTML = (minutes < 10 ? '0' : '') + minutes;
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
        lapList.innerHTML = '';
        lapCount = 1;
    };

    lapBtn.onclick = () => {
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCount}: ${appendMinutes.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
        lapList.appendChild(lapTime);
        lapCount++;
    };
};
