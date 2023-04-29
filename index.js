let homeScore = 0
let awayScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("away-score").textContent = awayScore

function add5h() {
    homeScore +=5
    document.getElementById("home-score").textContent = homeScore
}

function add3h() {
    homeScore +=3
    document.getElementById("home-score").textContent = homeScore
}

function add2h() {
    homeScore +=2
    document.getElementById("home-score").textContent = homeScore
}

function add5a() {
    awayScore +=5
    document.getElementById("away-score").textContent = awayScore
}

function add3a() {
    awayScore +=3
    document.getElementById("away-score").textContent = awayScore
}

function add2a() {
    awayScore +=2
    document.getElementById("away-score").textContent = awayScore
}