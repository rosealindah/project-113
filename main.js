function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(0, 0, 255);
    stroke(0, 0, 255)
    circle(50, 50, 70)
    rect(70, 30, 500, 40)
    circle(590,50,70)
    circle(50, 430, 70)
    rect(70, 410, 500, 40)
    circle(590,430,70)
    rect(30, 80 ,40, 375)
    rect(570, 80 ,40, 375)
}

function take_snapshot() {
    save("myimage.png")
}