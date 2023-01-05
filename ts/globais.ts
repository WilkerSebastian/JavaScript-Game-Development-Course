const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const canvas = document.getElementById("canvas") as HTMLCanvasElement
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

const pixeladd = 12

const xSprite = 62
const ySprite = 15
const widthSprite = 23
const heightSprite = 47

let frameX = 0

let gameFrame = 0

const staggerFrames = 6

const playImage = new Image()
playImage.src = "./img/alucard.png"

function animate() {

    ctx.clearRect(0 , 0, WIDTH, HEIGHT)

    ctx.drawImage(playImage, xSprite  + ((widthSprite * frameX) + (pixeladd * frameX)), ySprite , widthSprite, heightSprite, 0, 0, 100 , 150)

    if (gameFrame % staggerFrames == 0) {
     
        frameX = frameX < 5 ? frameX + 1 : 0

    }

    gameFrame++

    requestAnimationFrame(animate)

}

animate()