function setup() {
    video = createCapture(VIDEO);
    video.size(560,150);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}
function draw() {
    background('#969A97');
}
function gotPoses(result)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = flooor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWrist + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#F90093');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#F900093');
    stroke('#F900093')
    square(noseX, noseY, difference);
}

leftWrist_x = 0;
rightwrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO)
    video.size(400,400);
    video.position(10,50);

    canvas = creatCanvas(800,400);
    canvas.position(430,130);
    
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on("pose",gotposes);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size of The Text Will be = "+difference+"px";
    textSixze(difference);
    fill("#00ff0a");
    text('Prisha',50,400);
}

function modelDone(){
    console.log("PoseNet is Initalized And Loaded");
}

function gotposes(results, error){
    console.log("PoseNet is Inditialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(rewsults);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightwrist.x + " rightWrist_y = " +results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y ="+results[0].pose.leftWrist.y);
    }
}