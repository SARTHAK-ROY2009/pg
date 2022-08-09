function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 20, 20, 600, 440);
    circle(0, 0,50);
    circle(640, 0,50);
    circle(0, 480, 50);
    circle(640, 480, 50);
    fill(255, 0, 0);
    stroke(0, 255, 0);
}
function take_snapshot() {
    save('student_name.png');
}