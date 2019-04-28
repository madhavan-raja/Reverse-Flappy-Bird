var pipe;
var birds = [];
let score = 0;
let highScore = 0;

function setup()
{
	createCanvas(400, 600);

	pipe = new Pipe();
}

function draw()
{
	background(0);

	pipe.show();
	pipe.update();

	if (frameCount % 150 == 0)
		birds.push(new Bird());

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
		}
	}

	fill(255);
	textSize(16);
	text("Score: " + score, 120, 30);
	text("High Score: " + highScore, 120, 50);
}

function keyPressed()
{
	if (key == ' ')
		pipe.lift();
}