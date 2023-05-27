nose_x=0
nose_y=0
function take_snapshot(){
    save("Filtered Image.png");
}

function preload(){
    img=loadImage('https://i.postimg.cc/Jzq6n2JS/nose.png');
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.size(400,400);
    Video.hide();
    poseNet=ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initialized 😊")
}

function gotPoses(result){
    if (result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x-42;
        nose_y=result[0].pose.nose.y-50;
        console.log("Nose.x="+result[0].pose.nose.x);
        console.log("Nose.y="+result[0].pose.nose.y);
    }
}

function draw(){
    image (Video,0,0,400,400);
    image (img, nose_x , nose_y , 85,85);
}

