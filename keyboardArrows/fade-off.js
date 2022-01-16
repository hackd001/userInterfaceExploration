//touchElement function revised to update position of key when released.

let up_Arrow;
let right_Arrow;
let down_Arrow;
let left_Arrow;

function setup(){
    rectMode(CENTER);
    createCanvas(1000, 400);
    up_Arrow = new touchElement(width/2, height/2);
    right_Arrow = new touchElement(width/2 + 55, height/2 + 55);
    left_Arrow = new touchElement(width/2 - 55, height/2 + 55);
    down_Arrow = new touchElement(width/2, height/2 + 55);

}


function draw(){
     background('#222222');
    up_Arrow.draw();
    down_Arrow.draw();
    right_Arrow.draw();
    left_Arrow.draw();
    

}

function keyPressed(){
    if(keyCode == UP_ARROW){
        up_Arrow.keyPress();
    }
    if(keyCode == RIGHT_ARROW){
        right_Arrow.keyPress();
    }
    if(keyCode == LEFT_ARROW){
        left_Arrow.keyPress();
    }
    if(keyCode == DOWN_ARROW){
        down_Arrow.keyPress();
    }
}

function keyReleased(){
    if(keyCode == UP_ARROW){
        up_Arrow.keyRelease();
        console.log("up arrow pressed");
    }
    if(keyCode == RIGHT_ARROW){
        right_Arrow.keyRelease();
        console.log("right arrow pressed");
    }
    if(keyCode == LEFT_ARROW){
        left_Arrow.keyRelease();
        console.log("left arrow pressed");
    }
    if(keyCode == DOWN_ARROW){
        down_Arrow.keyRelease();
        console.log("down arrow pressed");
    }
}


function touchElement(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
    this.colour = 0;
    this.isReleased = false;
    this.draw = function(){
        fill(this.colour);
        rect(this.x, this.y, 50,50, 3);
        this.update();
    }
    this.update = function(){
        if(this.isReleased && this.colour >= 0){
            this.colour -= 10;
            this.y +=10;
        }
        else{
            this.isReleased = false;
            this.y = yPos;
        }
    }
    this.keyPress = function(){
        this.colour = 190;
        this.y = yPos;
    }
    this.keyRelease = function(){
        this.isReleased = true;
    }
}
