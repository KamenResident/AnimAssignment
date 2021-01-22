class Megaman {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.game.megaman = this;

        this.animation = new Animator(spritesheet, 32.5, 31, 29, 26, 3, 0.1, 0, false, true);

    };

    update() {

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 950, 455, 4);
    };
}
