var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/megamansprites.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	var spritesheet = ASSET_MANAGER.getAsset("./sprites/megamansprites.png");
	let megaman = new Megaman(gameEngine, 0, 0, spritesheet);

	gameEngine.init(ctx);

	gameEngine.addEntity(megaman);

	gameEngine.start();
});
