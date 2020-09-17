/* */

var bobIdle;
var bobRun;
var bobX;
var bobY;
var bobSpeed = 4;

function preload() {
    bobIdle = loadImage('assets/positive_idle.gif');
    bobRun = loadImage('assets/positive_run.gif');
}

function setup() {
	createCanvas(600, 600);
    bobX = width/2;
    bobY = height/2;
    imageMode(CENTER);
}

function draw() {
	background('black');
	noCursor();
    
    var bobIsRunning = false;

	if (keyIsDown(RIGHT_ARROW)) {
		bobX += bobSpeed;
		bobIsRunning = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		bobX -= bobSpeed;
		bobIsRunning = true;
	}

	if (keyIsDown(UP_ARROW)) {
		bobY -= bobSpeed;
		bobIsRunning = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		bobY += bobSpeed;
		bobIsRunning = true;
	}

	/* draw character image */
    
	if (bobIsRunning) {
		image(bobRun, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}
}