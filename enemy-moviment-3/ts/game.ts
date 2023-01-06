const canvas = document.getElementById("canvas") as HTMLCanvasElement

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

const numberOfEnemies = 5

let gameFrame = 0

const stuka = new Image()
stuka.src = "./img/enemies.png"

stuka.onload = animate

const enemies:Enemy[] = []

for (let index = 0; index < numberOfEnemies; index++) {
    
    enemies.push(new Enemy(stuka, WIDTH - (WIDTH * 0.10), Math.random() * (HEIGHT / 1.5), WIDTH * 0.10, HEIGHT * 0.075))
    
}

function animate() {

    ctx.clearRect(0,0, WIDTH,HEIGHT)

    enemies.forEach((enemy) => {

        enemy.update()
        enemy.render()

    })

    gameFrame++
    window.requestAnimationFrame(animate)

}