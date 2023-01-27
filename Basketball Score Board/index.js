let HomeScore = document.getElementById("scoreh")
let GuestScore = document.getElementById("scoreg")

let HomeOne = document.getElementById("PlusOneh")
let HomeTwo = document.getElementById("PlusTwoh")
let HomeThree = document.getElementById("PlusThreeh")

let GuestOne = document.getElementById("PlusOneg")
let GuestTwo = document.getElementById("PlusTwog")
let GuestThree = document.getElementById("PlusThreeg")

let ScoreCountH = 0 

function PlusOneH()
{
    ScoreCountH += 1
    HomeScore.textContent = ScoreCountH
    console.log(ScoreCountH)
}

function PlusTwoH()
{
    ScoreCountH += 2
    HomeScore.textContent = ScoreCountH
    console.log(ScoreCountH)
}

function PlusThreeH()
{
    ScoreCountH += 3
    HomeScore.textContent = ScoreCountH
    console.log(ScoreCountH)
}

let ScoreCountG = 0

function PlusOneG()
{
    ScoreCountG += 1
    GuestScore.textContent = ScoreCountG
    console.log(ScoreCountG)
}

function PlusTwoG()
{
    ScoreCountG += 2
    GuestScore.textContent = ScoreCountG
    console.log(ScoreCountG)
}

function PlusThreeG()
{
    ScoreCountG += 3
    GuestScore.textContent = ScoreCountG
    console.log(ScoreCountG)
}