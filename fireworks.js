const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.hue = Math.random() * 360;

    for (let i = 0; i < 50; i++) {
      this.particles.push(new Particle(this.x, this.y, this.hue));
    }
  }

  update() {
    this.particles.forEach((particle) => particle.update());
    this.particles = this.particles.filter((particle) => !particle.finished);
  }

  draw() {
    this.particles.forEach((particle) => particle.draw());
  }
}

class Particle {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.alpha = 1;
    this.finished = false;
    this.velocity = {
      x: Math.random() * 6 - 3,
      y: Math.random() * 6 - 3,
    };
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.01;

    if (this.alpha <= 0) {
      this.finished = true;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

let fireworks = [];

function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    fireworks.forEach((firework) => firework.update());
    fireworks.forEach((firework) => firework.draw());
    fireworks = fireworks.filter((firework) => firework.particles.length > 0);
  
    requestAnimationFrame(animate);
  }

animate();

canvas.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    fireworks.push(new Firework(x, y));
  
    // Hide instruction text after the first click/tap
    const instructionElement = document.querySelector(".instruction");
    instructionElement.classList.add("hide");
  });

  