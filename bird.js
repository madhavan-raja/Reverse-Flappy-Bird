function Bird()
{
    this.x = width;
    this.y = random(100, height - 50);
    this.size = 30;

    this.speed = 2;

    this.show = function()
    {
        fill(230, 230, 0);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.update = function()
    {
        this.x -= this.speed;
    }

    this.offscreen = function()
    {
        return this.x < 0;
    }

    this.hits = function(pipe)
    {
        if (this.x > pipe.x && this.x < pipe.x + pipe.thickness)
            if (this.y < pipe.cutPos || this.y > pipe.cutPos + pipe.cutSize)
                return true;

        return false;
    }
}