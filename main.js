function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,500);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",modelLoaded);
  //This classifier is the classifying tool
  
}
function modelLoaded(){
  console.log('model Ready');
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotResult);
}
function gotResult(error,result){
  if(error){
    console.log(error);
  }
  else{
    document.getElementById("Object").innerHTML = result[0].label;
    document.getElementById("Accuracy").innerHTML = (result[0].confidence * 100).toFixed(0) +"%";
  }
}

function preset(){}



