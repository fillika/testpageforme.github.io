class Scene3 extends Phaser.Scene {
  constructor() {
    super("startDrag");
  }

  preload() {
    for (var i = 1; i < 4; i++) {
      this.load.image("qs" + i, "assets/images/sq/qs" + i + ".png");
    }

    this.load.image("qsArea", "assets/images/sq/area.png");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    this.add.image(612, 100, "qsArea");

    for (var i = 1; i < 4; i++) {
      var xx = Phaser.Math.Between(config.width * 0.25, config.width * 0.75);
      var yy = Phaser.Math.Between(config.height * 0.25, config.height * 0.75);
      var qs = this.add.image(xx, yy, "qs" + i);
      qs.setInteractive();
    }

    this.input.on("pointerdown", this.startDrag, this);
  }

  update() {}

  startDrag(pointer, targets) {
    this.input.off("pointerdown", this.startDrag, this);
    this.dragObj = targets[0];
    this.input.on("pointermove", this.doDrag, this);
    this.input.on("pointerup", this.stopDrag, this);
  }

  doDrag(pointer) {
    this.dragObj.x = pointer.x;
    this.dragObj.y = pointer.y;
  }

  stopDrag() {
    this.input.on("pointerdown", this.startDrag, this);
    this.input.off("pointermove", this.doDrag, this);
    this.input.off("pointerup", this.stopDrag, this);
  }
}
