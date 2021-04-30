var noseX = 0;
var noseY = 0;

var headX = 0;
var headY = 0;


function partyHat() {
    partyhatVar = 1;
    clownNoseVar = 0;
    lipsVar = 0;
    mustacheVar = 0;
}

function clownNose() {
    clownNoseVar = 1;
    partyhatVar = 0;
    lipsVar = 0;
    mustacheVar = 0;
}

function lips() {
    clownNoseVar = 0;
    partyhatVar = 0;
    lipsVar = 1;
    mustacheVar = 0;
}

function mustache() {
    clownNoseVar = 0;
    partyhatVar = 0;
    lipsVar = 0;
    mustacheVar = 1;
}


function preload() {
    partyHatImg = loadImage('https://i.postimg.cc/ydYfy5P2/Party-Hat.png'); 
    clownNoseImg = loadImage('https://i.postimg.cc/3RCLXhmX/4ab14dd9eb4540bc72902b65547ff699-removebg-preview.png');   
    lipsImg = loadImage('https://i.postimg.cc/pdxq87b3/lips.png');  
    mustacheImg = loadImage('https://i.postimg.cc/SQ1QgpvW/Mustache.png');
}

function setup () {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}






var partyhatVar = 0;
var clownNoseVar = 0;
var lipsVar = 0;
var mustacheVar = 0;

var clownNoseImg = "";
var partyHatImg = "";
var lipsImg = "";
var mustacheImg = "";


function draw() {

    image(video, 0, 0, 300, 300);

    if (clownNoseVar == 1) {
        image(clownNoseImg ,noseX, noseY, 40, 40);
        }

        if (partyhatVar == 1) {
            image(partyHatImg ,headX, headY, 60, 80);
                }

                if (lipsVar == 1) {
                    image(lipsImg ,noseX, noseY, 60, 40);
                        }


                        if (mustacheVar == 1) {
                            image(mustacheImg ,noseX, noseY, 60, 40);
                                }
} 

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

        if(clownNoseVar == 1) {
        noseX = results[0].pose.nose.x-18;
        noseY =  results[0].pose.nose.y-15;
        console.log("N x - " + results[0].pose.nose.x + "N y -" + results[0].pose.nose.y);
        }

        if (partyhatVar == 1) {
        headX = results[0].pose.rightEye.x-10;
        headY =  results[0].pose.rightEye.y-130;
        console.log("x - " + results[0].pose.rightEye.x + "y -" + results[0].pose.rightEye.y);
        }

        if (lipsVar == 1) {
            noseX = results[0].pose.nose.x-25;
            noseY =  results[0].pose.nose.y-2;
            }

        if (mustacheVar == 1) {
            noseX = results[0].pose.nose.x-25;
            noseY =  results[0].pose.nose.y-2;
            }
        
    }
    
}

function snap() {

    if (clownNoseVar == 1) {
        save('sillyClownNose.jpg');
        }
    
        if (partyhatVar == 1) {
            save('partyHat.jpg');
            }

            if (lipsVar == 1) {
                save('lips.jpg');
                }

                if (mustacheVar == 1) {
                    save('mustache.jpg');
                    }
}