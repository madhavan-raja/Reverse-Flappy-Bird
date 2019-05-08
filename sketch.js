var pipe;
var birds = [];
let score = 0;
let highScore = 0;

let movementSpeed = -2;

var backgroundImage;
var ground;

let groundHeight = 80;

let birdSpawn = 0;

var game_over;
let game_over_width = 425;
let game_over_height = 50;

let fontRegular;

function preload()
{
	game_over = loadImage("assets/game_over.png");
	fontRegular = loadFont("assets/04B_19.TTF");
}

function setup()
{
	createCanvas(480, 640);
	backgroundImage = loadImage("assets/background.png");
	ground = new Ground();

	pipe = new Pipe();
}

function draw()
{
	background(0);
	image(backgroundImage, 0, 0);

	fill(255);
	textFont(fontRegular);
	textSize(62);
	textStyle(BOLD);
	textAlign(CENTER);
	text(score, width / 2, 100);
	textStyle(NORMAL);
	textSize(16);
	text("HI " + highScore, width / 2, 130);

	ground.update();
	ground.show();

	pipe.show();
	pipe.update();

	if (birdSpawn <= 0)
	{
		birds.push(new Bird());
		birdSpawn = random(100, 200);
	}
	birdSpawn--;

	for (let i = birds.length - 1; i >= 0; i--)
	{
		birds[i].show();
		birds[i].update();

		if (birds[i].offscreen())
		{
			birds.splice(i, 1);
			score += 1;
			if (score > highScore)
				highScore = score;
		}

		if (birds[i].hits(pipe))
		{
			pipe.reset();
			birds = [];
			score = 0;
			birdSpawn = 0;

			image(game_over, width / 2 - game_over_width / 2, 150, game_over_width, game_over_height);

			noLoop();
			break;
		}
	}
}

function keyPressed()
{
	if (key == ' ')
		action();
}

function mousePressed()
{
	action();
}

function action()
{
	pipe.lift();
	loop();
}