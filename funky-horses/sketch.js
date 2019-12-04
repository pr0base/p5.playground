let spriteHorseGold;
let spriteHorseBrown;
let spriteHorseWhite;
let spriteHorseBlack;
let spriteHorseGray;
let spriteUnicorn;
let spriteTail;
let spriteSaddle;
let horses = [];
let maskUnicornWithTail = [];
let maskUnicorn = [];
let gBackground;
let gSpace;
function preload()
{
	spriteHorseGold = loadImage('assets/sprites/horse/Horse/Horse Gallop Gold.png'); 
	spriteHorseBrown = loadImage('assets/sprites/horse/Horse/Horse Gallop Brown.png'); 
	spriteHorseWhite = loadImage('assets/sprites/horse/Horse/Horse Gallop White.png'); 
	spriteHorseBlack = loadImage('assets/sprites/horse/Horse/Horse Gallop Black.png'); 
	spriteHorseGray = loadImage('assets/sprites/horse/Horse/Horse Gallop Gray.png'); 
	spriteUnicorn = loadImage('assets/sprites/horse/Markings/Unicorn Horn/Horn Gallop Purple.png');
	spriteTail = loadImage('assets/sprites/horse/Markings/Mane_Tail/Mane_Tail Gallop Gray.png');
	spriteSaddle = loadImage('assets/sprites/horse/Accessories/Saddle Gallop.png');
	gBackground = loadImage('assets/img/M16_HaSynLumLumRGB.jpg');
	maskUnicorn.push(spriteUnicorn);
	maskUnicornWithTail.push(spriteUnicorn);
	maskUnicornWithTail.push(spriteTail);
	
}

function setup() {
	gSpace = false;
	createCanvas(window.screen.width, window.screen.height);
	for (let iii=0; iii < 40; iii++)
	{
		let lHorse;
		switch (floor(random(1, 6))) {
			case 1: 
				lHorse = spriteHorseGold;
				break;
			case 2: 
				lHorse = spriteHorseBrown;
				break;
			case 3:
				lHorse = spriteHorseWhite;
				break;
			case 4:
				lHorse = spriteHorseBlack;
				break;
			case 5:
				lHorse = spriteHorseGray;
				break;
		}

		let lMasks = [];
		let lType = floor(random(0, 4));
		// console.log(lType)
		switch (lType) {
			case 1: 
				lMasks.push(spriteUnicorn);
				break;
			case 2:
				lMasks.push(spriteUnicorn);
				lMasks.push(spriteTail);
				break;
			case 3:
				lMasks.push(spriteUnicorn);
				lMasks.push(spriteTail);
				lMasks.push(spriteSaddle);
				break;
		}
		// horses.push(new Horse(lHorse, random(0, window.screen.width), random(0, window.screen.height), random(0.1, 0.5), lMasks));
		let lRotating = false;

		if (random(1) > .5)
		{
			lRotating = true;
		}
		console.log(lRotating);
		horses.push(new Horse(lHorse, 0, random(0, window.screen.height), random(0.1, 0.5), lMasks, lRotating));
	}
  }
  
  function keyPressed() {	
	console.log(keyCode);
	if (key == 'z' || key == 'Z') {
		gSpace = !gSpace;
	}
  }


  function draw() {
	
	
	if (gSpace)
	{
		// --- Scale the background image dynamically based on the window size
		bratio = float(gBackground.height)/float(gBackground.width);
		wratio = float(width)/float(gBackground.width);
		hratio = float(height)/float(gBackground.height);
		if (wratio > bratio) { 
			image(gBackground,width/2,height/2,gBackground.width,bratio*gBackground.height); 
		}
		else { 
			image(gBackground,width/2,height/2,bratio*gBackground.width,gBackground.height); 
		}
	}
	else
	{
		let lBackground = '#FF69B4';
		background(lBackground);
	}
	

	for (let lHorse of horses) {
		lHorse.show();
		lHorse.animate();
	}
  }