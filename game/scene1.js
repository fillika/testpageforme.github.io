class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  // Загружаю изображения в "память" игры
  preload() {
    this.load.image("background", "assets/images/background.jpg");
    this.load.spritesheet("squirrel", "assets/images/squirrel.png", {
      frameWidth: 170,
      frameHeight: 137
    });
    this.load.spritesheet("venya", "assets/images/venya.png", {
      frameWidth: 190,
      frameHeight: 247
    });
  }

  create() {
    this.add.text(517, 394, "Loading game...");
    this.scene.start("playGame");
  }
}
