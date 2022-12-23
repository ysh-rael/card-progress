const elemCircleProgress = document.querySelector('#circle__progress')
const circlePorcentnumber = Array.from(document.querySelectorAll('.Card__progress__number, .progress__version__value'))
const circleComplete = 314
let circlePorcent = .1

fetch('/',{ method: 'get' })
.then( e => console.log(e))

// setInterval(e => {
//     circlePorcent += .012
//     if(circlePorcent >= 1) {clearInterval(); circlePorcent = 1}
//     circlePorcentnumber.forEach( e => e.innerHTML = `${parseInt(circlePorcent*100)}%`)
//     elemCircleProgress.style.strokeDasharray = circleComplete
//     elemCircleProgress.style.strokeDashoffset = circleComplete - circleComplete * circlePorcent
// },1000)
