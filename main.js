nose_x = 0 ;
nose_Y = 0;
function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/4xkkj4q4/clown-nose.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded()
{
  console.log("poseNet is initialized");
}
function gotposes(results)
{
    if(results.length>0)
    {
     console.log(results);
     nose_X = results[0].pose.nose.x -15;
     nose_Y = results[0].pose.nose.y -15;
     console.log("nose x=" + nose_X);
     console.log("nose y=" + nose_Y);
    }
}
function draw()
{
  image(video,0,0,300,300);
  //x,y,width,height
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(nose_X,nose_Y,20);
  //x,y,radius
  image(clown_nose,nose_X,nose_Y,30,30);
  }
function take_snapshot()
{
    save('my filter image.png');
}
