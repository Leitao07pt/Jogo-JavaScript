class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this);
    }


    render() {
        this.ctx.fillStyle = 'red';
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);
    
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }

        requestAnimationFrame(animate);
    });