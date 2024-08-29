let clock = document.getElementById("clock")

let emo = document.getElementById("emotion")

emo.innerText = ["🤍",  "💪", "🥰"][Math.floor(Math.random() * (2-0+1) + 0)]

const countDownDate = new Date("Aug 31, 2024 09:00:00").getTime();
const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = countDownDate - now;
    if (duration < 0) {
        clearInterval(interval);
        updateDuration(0);
        console.log(new Date().getTime())
        return;
    }
    updateDuration(duration); 
    }, 1000);

function updateDuration (duration) {
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((duration % (1000 * 60)) / 1000);
    clock.innerText = days + "d, " + hours + "g, " + minutes + "m, " + seconds + "s"
}