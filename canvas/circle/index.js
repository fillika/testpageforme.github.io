"use strict";

window.addEventListener("load", event => {
  const canvas = document.querySelector(".canvas");
  const ctx = canvas.getContext("2d");
  const mouse = {
    x: undefined,
    y: undefined
  };

  let circlesNum = 300;

  function Circle(x, y, dx, dy, radius, color = "#000") {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.stroke();
      ctx.fill();

      this.update();
    };

    this.update = function() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + +this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      //  iterractivity

      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < 40) {
          this.radius += 2;
        }
      } else if (this.radius > 2) {
        this.radius -= 1;
      }
    };
  }

  /* canvas paramethers */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (window.innerWidth < 768) {
    circlesNum = 600;
  } else if (window.innerWidth < 1024) {
    circlesNum = 856;
  } else if (window.innerWidth < 1400) {
    circlesNum = 1000;
  } else {
    circlesNum = 1250;
  }

  const circleArr = [];

  for (let i = 0; i < circlesNum; i++) {
    let radius = 5;
    let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius),
      y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius),
      dx = (Math.random() - 0.5) * 4,
      dy = (Math.random() - 0.5) * 4,
      r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);

    circleArr.push(new Circle(x, y, dx, dy, radius, `rgb(${r},${g},${b})`));
  }

  animate();

  canvas.addEventListener("mousemove", event => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener("resize", event => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // create loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circleArr.forEach(item => {
      item.draw();
    });
  }

  function fillRect(x, y, width, height, color = "#000") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
});

/*

fillRect(50, 75, 100, 100, "#a6d608");
fillRect(150, 175, 100, 100, "red");
fillRect(250, 375, 100, 100, "#7f00ff");
fillRect(850, 675, 100, 100);

/!* draw lines *!/

ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(500, 80);
ctx.lineTo(700, 125);
ctx.lineTo(800, 325);
ctx.lineTo(700, 525);
ctx.strokeStyle = "#7f00ff";
ctx.stroke();

*/
