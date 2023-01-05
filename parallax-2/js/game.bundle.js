"use strict";
class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = image.width;
        this.height = HEIGHT;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        this.x = gameFrame * this.speed % this.width;
    }
    render() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}
const canvas = document.getElementById("canvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");
const fundo1 = new Image(1920, 1080);
fundo1.src = "./img/fundo1.png";
const fundo2 = new Image(1920, 1080);
fundo2.src = "./img/fundo2.png";
let gameSpeed = 5;
let gameFrame = 0;
$("#valor").on("change", () => {
    gameSpeed = Number($("#valor").val());
    $("#resultado").text(`velocidade: ${gameSpeed}`);
});
const layerDiaNoite = new Layer(fundo1, 3);
const layerMontanha = new Layer(fundo2, 0.5);
const GameObjects = [layerDiaNoite, layerMontanha];
function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    GameObjects.forEach((object) => {
        object.update();
        object.render();
    });
    gameFrame--;
    requestAnimationFrame(animate);
}
animate();
