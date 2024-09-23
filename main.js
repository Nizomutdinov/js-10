let input = document.querySelector('.input'),
btn = document.querySelector('.btn'),
time = document.querySelector('.time'),
gameZone = document.querySelector('.game__zone'),
colors = ['red','blue','green','yellow','white','black']
jan = [20,30,40,50,60,70,80,90,100]
ballForm = ['polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', 'inset(5% 20% 15% 10%)','circle(50% at 50% 50%)', 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 'inset(0 0 0 0']
 score = 0,
gameTime = 0,
interval = 0;

btn.addEventListener('click', () => {
if(input.value > 4){
    gameTime = input.value 
    input.value = ''
    gameZone.innerHTML = ''
    score = 0
    startGame()
}else{
    alert('Нужно ввести минимум 5 секунд')
}
})

gameZone.addEventListener('click',(event) => {
if(event.target.classList.contains('ball')){
    score++
    event.target.remove()
    createBall()
}
})

function startGame() {
time.innerHTML = gameTime
interval = setInterval(() => decreaseTime(), 1000)
createBall()
}

function decreaseTime(){
if(gameTime == 1){
time.innerHTML = 0
endGame()
}else{
  time.innerHTML = --gameTime 
//   --time.innerHTML  
}
}

function endGame(){
gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
clearInterval(interval)
}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = naj()
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = getRandomColor()

    let coor = gameZone.getBoundingClientRect()

    let leftValue = random(0,coor.width - size)
    let topValue = random(0,coor.height - size)
    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'
    ball.style.clipPath = getRandomForm() 
    ball.style.inset = getRandomForm()  
    gameZone.append(ball)
}


function random(min,max){
return Math.floor(Math.random() * (max + 1 - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random()  * colors.length)]; 
}

function getRandomForm() {
    return ballForm[Math.floor(Math.random()  * ballForm.length)]; 
}
function naj() {
    return jan[Math.floor(Math.random()  * jan.length)]; 
}