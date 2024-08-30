let clock = document.getElementById("clock")
let my_window = document.getElementById("window")
let enjoy = document.getElementById("enjoy")
let emo = document.getElementById("emotion")

// let meet = "Aug 31, 2024 09:00:00"
let meet = "Aug 30, 2024 13:22:00"
emo.innerText = ["🤍",  "💪", "🥰", "😘", "😻"][Math.floor(Math.random() * (4-0+1) + 0)]

const countDownDate = new Date(meet).getTime();
const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = countDownDate - now;
    if (duration <= 1) {
        getEnjoy()
        updateDuration(duration)
        clearInterval(interval);
        updateDuration(0);
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

function getEnjoy() {
    enjoy.style.display = "block"
    enjoy.style.transform = "translateY(0vh) rotateZ(-15deg)"
    setTimeout(() => {
        enjoy.style.animation =  "enmove 3s ease-in-out infinite"
    }, 501)
    my_window.style.opacity = 0
    emo.style.opacity = 0
}
