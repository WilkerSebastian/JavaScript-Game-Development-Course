"use strict";
const canvas = document.getElementById("canvas");
canvas.width = 150;
canvas.height = 300;
const ctx = canvas.getContext("2d");
let state = "run";
let frameX = 0;
let gameFrame = 0;
const staggerFrames = 4;
const playImage = new Image();
playImage.src = "./img/alucard.png";
const animationFrames = {
    "run": [
        { x: 14, y: 151, width: 32, height: 46 },
        { x: 59, y: 151, width: 30, height: 46 },
        { x: 103, y: 149, width: 29, height: 48 },
        { x: 144, y: 153, width: 29, height: 44 },
        { x: 192, y: 155, width: 29, height: 42 },
        { x: 240, y: 156, width: 28, height: 41 },
        { x: 285, y: 156, width: 27, height: 41 },
        { x: 331, y: 153, width: 27, height: 44 },
        { x: 373, y: 152, width: 27, height: 45 },
        { x: 414, y: 152, width: 34, height: 45 },
        { x: 462, y: 152, width: 39, height: 45 },
        { x: 517, y: 153, width: 37, height: 44 },
        { x: 569, y: 154, width: 39, height: 43 },
        { x: 620, y: 154, width: 39, height: 43 },
        { x: 673, y: 155, width: 39, height: 42 },
        { x: 727, y: 153, width: 34, height: 44 }
    ]
};
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const position = Math.floor(gameFrame / staggerFrames) % animationFrames[state].length;
    const sprite = animationFrames[state][position];
    ctx.drawImage(playImage, sprite.x, sprite.y, sprite.width, sprite.height, 0, 0, canvas.width, canvas.height);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
