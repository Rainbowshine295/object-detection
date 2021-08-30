img = "";
status = " ";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd' , modelLodaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLodaded() {
    console.log("Model is loaded! :)");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error, results) {
if (error) {
    console.log(error);
}
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog" , 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#4ff07d");
    text("Cat" , 320, 120);
    noFill();
    stroke("#4ff07d");
    rect(300, 90, 270, 320);
}