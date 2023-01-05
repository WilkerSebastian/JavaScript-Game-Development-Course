class Layer {

    image:HTMLImageElement
    speedModifier:number
    speed:number
    x:number
    y:number
    width:number
    height:number

    constructor(image:HTMLImageElement , speedModifier:number) {
        
        this.x = 0
        this.y = 0
        this.width = image.width
        this.height = HEIGHT
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier

    }

    update() {

        this.speed = gameSpeed * this.speedModifier

        this.x = gameFrame * this.speed % this.width

    }

    render() {

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)

    }

}