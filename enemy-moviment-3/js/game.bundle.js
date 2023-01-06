"use strict";
class Enemy {
    constructor(sprite, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = Math.random() * 4 + 2;
        this.sprite = sprite;
        this.spriteWidth = 455;
        this.spriteHeight = 162;
        this.frame = 0;
        this.burnSpeed = Math.floor(Math.random() * 6 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }
    update() {
        this.y += this.curve * Math.sin(this.angle);
        this.x -= this.speed;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) {
            this.x = WIDTH - (this.x + this.width);
        }
        if (gameFrame % this.burnSpeed == 0) {
            this.frame >= 2 ? this.frame = 0 : this.frame++;
        }
    }
    render() {
        ctx.drawImage(this.sprite, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
const canvas = document.getElementById("canvas");
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext("2d");
const numberOfEnemies = 5;
let gameFrame = 0;
const stuka = new Image();
stuka.src = "./img/enemies.png";
stuka.onload = animate;
const enemies = [];
for (let index = 0; index < numberOfEnemies; index++) {
    enemies.push(new Enemy(stuka, WIDTH - (WIDTH * 0.10), Math.random() * (HEIGHT / 1.5), WIDTH * 0.10, HEIGHT * 0.075));
}
function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    enemies.forEach((enemy) => {
        enemy.update();
        enemy.render();
    });
    gameFrame++;
    window.requestAnimationFrame(animate);
}
