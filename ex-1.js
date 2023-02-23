"use strict";

let x, y;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = windowWidth / 2;
    y = windowHeight / 2;
}

function draw() {
    background(255);
    fill(0);

    if ((x > windowWidth) || (x < 0)) {
        xSpeed *= -1;
    }
    if ((y > windowHeight) || (y < 0)) {
        ySpeed *= -1;
    }


    x += xSpeed;
    y += ySpeed;

    ellipse(x, y, 50);
}