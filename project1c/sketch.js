// P2 Setting - 9/21

// global variables
var bobIdle;
var bobRunR, bobRunL;
var bobX, bobY;
var bobSpeed = 4;
var mounthills;
var pinetree;
var pinetreedark;
var pinetreeblack;
var moon;
var grass;
var signImage;
var objBubble;



function preload() {
    bobIdle = loadImage('assets/positive_idle.gif');
    bobRunR = loadImage('assets/positive_run_right.gif');
    bobRunL = loadImage('assets/positive_run_left.gif');
    mounthills = loadImage('assets/mountandhills.png');
    pinetree = loadImage('assets/pine_tree.gif');
    pinetreedark = loadImage('assets/darkpine_tree.gif');
    pinetreeblack = loadImage('assets/blackpine_tree.gif');
    moon = loadImage('assets/the-moon.gif');
    grass = loadImage('assets/grass.gif');
    signImage = loadImage('assets/brownsign.png');
    objBubble = loadImage('assets/objbubble.png');
    
}

function setup() {
	createCanvas(1200, 600);
    bobX = width/2;
    bobY = 500;
    imageMode(CENTER);
}

function sign(msg, x, y) {
	image(signImage, x, y, 85, 85);

	// 2d collision between player (jerry) and sign 

	if (bobX - bobIdle.width / 2 < x + signImage.width / 2 &&
		bobX + bobIdle.width / 2 > x - signImage.width / 2 &&
		bobY - bobIdle.height / 2 < y + signImage.height / 2 &&
		bobY + bobIdle.height / 2 > y - signImage.height / 2) {

		image(objBubble, sign.x, sign.y - 200, 100, 100)
		fill(255);
		textFont("Comic Sans MS");
		textSize(18);
		textAlign(CENTER, CENTER);
		text(msg, x - objBubble.width/2 + 20, y - objBubble.height/2, objBubble.width - 40, objBubble.height - 60);
	}
}

function draw() {
	background(0, 5, 46);
	noCursor();

	// still images (background)

	image(mounthills, 300, 300, 600, 600);
	image(moon, 1000, 100, 100, 100);

	// loop

	for (let x = 0; x < width; x += 130) {
		image(pinetreeblack, x + 35, 450, 150, 350);
		image(pinetreeblack, x + 90, 450, 150, 350);
		image(pinetreedark, x + 63, 430, 150, 350);
		image(pinetree, x, 410, 150, 350);
	}
    
    // character movement

    var bobIsRunningRight = false;
    var bobIsRunningLeft= false;

	if (keyIsDown(RIGHT_ARROW)) {
		bobX += bobSpeed;
		bobIsRunningRight = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		bobX -= bobSpeed;
		bobIsRunningLeft = true;
	}

	if (keyIsDown(UP_ARROW)) {
		bobY -= bobSpeed;
		bobIsRunningRight = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		bobY += bobSpeed;
		bobIsRunningLeft = true;
	}

	// signs
	sign("Stretch high and\nreach for the stars.", 100, 530);
	sign("Teleport to the Moon\n[Press Spacebar]", 1100, 530);

	// character image
    
	if (bobIsRunningRight) {
		image(bobRunR, bobX, bobY);
	} else if (bobIsRunningLeft) {
		image(bobRunL, bobX, bobY);
	} else {
		image(bobIdle, bobX, bobY);
	}

	// more still images (foreground)

	image(grass, width/2, height/2, 1200, 600);

}