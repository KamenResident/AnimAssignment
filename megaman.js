class Megaman {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet });

        this.game.megaman = this;

        this.state = 0;
        this.currentFrame = 0;

        this.animation = new Animator(this.spritesheet, 66, 2, 24, 26, 3, 0.5, 2, false, true);

        this.animations = [];
        this.loadAnimations(this.spritesheet);

    };

    update() {

    }

    loadAnimations(spritesheet) {

        this.animations[0] = new Animator(spritesheet, 66, 2, 24, 26, 1, 0.5, 2, false, true);
        this.animations[1] = new Animator(spritesheet, 91, 0, 16, 26, 1, 0.5, 2, false, true);
        this.animations[2] = new Animator(spritesheet, 108, 2, 21, 26, 1, 0.5, 2, false, true);
    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 950, 455, 7);
        // this.animations[0].drawFrame(this.game.clockTick, ctx, 950, 455, 3);
        // this.animations[1].drawFrame(this.game.clockTick, ctx, 950, 455, 3);
        // this.animations[2].drawFrame(this.game.clockTick, ctx, 950, 455, 3);
    };
}
