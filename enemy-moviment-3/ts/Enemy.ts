class Enemy {

    x:number
    y:number
    width:number
    height:number
    speed:number
    sprite:HTMLImageElement
    spriteWidth:number
    spriteHeight:number
    burnSpeed:number
    frame:number
    angle:number
    angleSpeed:number
    curve:number

    constructor(sprite:HTMLImageElement, x:number, y:number, width:number, height:number) {

        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = Math.random() * 4 + 2
        this.sprite = sprite
        this.spriteWidth = 455
        this.spriteHeight = 162
        this.frame = 0
        this.burnSpeed = Math.floor(Math.random() * 6 + 1)
        this.angle = 0
        this.angleSpeed = Math.random() * 0.2
        this.curve = Math.random() * 7

    }

    update() {

        this.y += this.curve * Math.sin(this.angle)
        this.x -= this.speed

        this.angle += this.angleSpeed

        if (this.x + this.width < 0) {

            this.x = WIDTH - (this.x + this.width)

        }

        if (gameFrame % this.burnSpeed == 0) {
            
            this.frame >= 2 ? this.frame = 0 : this.frame++ 

        }

    }

    render() {

        ctx.drawImage(this.sprite, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x , this.y, this.width, this.height)

    }

}