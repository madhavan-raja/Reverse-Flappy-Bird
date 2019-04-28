function Pipe()
{
    this.x = 60;
    this.thickness = 40;
    this.cutSize = 100;
    this.cutPos = height / 2;

    this.velocity = 0;
    this.gravity = 0.2;
    this.liftVelocity = 5;

    this.reset = function()
    {
        this.cutPos = height / 2;
        this.velocity = 0;
    }

    this.show = function()
    {
        fill(0, 200, 0);
        rect(this.x, 0, this.thickness, this.cutPos);
        rect(this.x, this.cutPos + this.cutSize, this.thickness, height - (this.cutPos + this.cutSize));
    }

    this.update = function()
    {
        this.velocity += this.gravity;
        this.cutPos += this.velocity;

        if (this.cutPos > height - this.cutSize)
            this.cutPos = height - this.cutSize;
        else if (this.cutPos < 0)
            this.cutPos = 0;
    }

    this.lift = function()
    {
        this.velocity = -this.liftVelocity;
    }
}