class Player {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 200;
    }

    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
     }

     update() {
        this.x++;
     }
}