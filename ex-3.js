"use strict";

let w, h;
let location, speed, acceleration;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background(200);

    location = createVector(w / 2, h / 2);
    speed = createVector();
    acceleration = createVector();
}

function draw() {
    background(200);

    //Formula for movement
    //
    //

    ellipse(location.x, location.y, 50);
}