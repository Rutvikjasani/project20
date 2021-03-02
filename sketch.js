var cat1,cat2,cat3,cat4,cat1Image,cat2Image,cat3Image,cat4Image;
var gardan,gardanImage;
var mouse1,mouse2,mouse3,mouse4,mouse1Image,mouse2Image,mouse3Image,mouse4Image;

function preload() {
    
    cat1Image = loadImage("cat1.png");
    cat2Image = loadImage("cat2.png");
    cat3Image = loadImage("cat3.png");
    cat4Image = loadImage("cat4.png");
    gardanImage = loadImage("garden.png");
    mouse1Image = loadImage("mouse1.png");
    mouse2Image = loadImage("mouse2.png");
    mouse3Image = loadImage("mouse3.png");
    mouse4Image = loadImage("mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    
    cat1.addImage("cat1",cat1.png);
    cat2.addImage("cat2",cat2.png);
    cat3.addImage("cat3",cat3.png);
    cat4.addImage("cat4",cat4.png);

    gardan.addImage("gardan",garden.png);
    mouse1.addImage("mouse1",mouse1.png);
    mouse2.addImage("mouse2",mouse2.png);
    mouse3.addImage("mouse3",mouse3.png);
    mouse4.addImage("mouse4",mouse4.png);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();

    cat1();
}


function keyPressed(){

  //For moving and changing animation write code here


}
