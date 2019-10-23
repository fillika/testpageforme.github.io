class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    this.squirrel = this.add.sprite(-50, 650, "squirrel");
    this.venya = this.add.sprite(1300, 650, "venya");

    this.anims.create({
      key: "squirrel_anim",
      frames: this.anims.generateFrameNumbers("squirrel"),
      frameRate: 20,
      repeat: 5
    });
    this.anims.create({
      key: "venya_anim",
      frames: this.anims.generateFrameNumbers("venya"),
      frameRate: 20,
      repeat: 5
    });

    this.squirrel.play("squirrel_anim");
    this.venya.play("venya_anim");

    this.add.text(40, 40, "Тут разные диалоги", {
      font: "25px Arial",
      fill: "Black"
    });

    setTimeout(() => {
      this.scene.start("startDrag");
    }, 10000);
  }

  update() {
    this.moveSquirrel(this.squirrel, 1.5, this);
    this.moveVenya(this.venya, 1.5, this);
  }

  moveSquirrel(animal, speed, obj) {
    animal.x += speed;
    if (animal.x >= 200) {
      animal.x = 200;
      obj.add.text(60, 460, "Привет, Я - Белка.", {
        font: "25px Arial",
        fill: "Black"
      });
    }
  }

  moveVenya(animal, speed, obj) {
    animal.x -= speed;
    if (animal.x <= 1050) {
      animal.x = 1050;
      obj.add.text(1000, 460, "Привет, Я - Веня.", {
        font: "25px Arial",
        fill: "Black"
      });
    }
  }
}
