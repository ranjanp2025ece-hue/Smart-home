// Interactive Web-Shooter Particle & Line Effect
const canvas = document.getElementById('webCanvas');
const ctx = canvas.getContext('2d');

let webs = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class WebLine {
  constructor(startX, startY, targetX, targetY) {
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.progress = 0;
    this.opacity = 1;
    this.branches = [];
    this.createBranches();
  }

  createBranches() {
    const numBranches = 6;
    for (let i = 0; i < numBranches; i++) {
      const angle = (Math.PI * 2 / numBranches) * i;
      const length = Math.random() * 40 + 20;
      this.branches.push({
        x: Math.cos(angle) * length,
        y: Math.sin(angle) * length
      });
    }
  }

  update() {
    if (this.progress < 1) {
      this.progress += 0.15;
    } else {
      this.opacity -= 0.02;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#00D2FF';

    // Main web line from launcher to target
    const currentX = this.startX + (this.targetX - this.startX) * Math.min(this.progress, 1);
    const currentY = this.startY + (this.targetY - this.startY) * Math.min(this.progress, 1);

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    // Web splatter burst at target when line connects
    if (this.progress >= 1) {
      ctx.beginPath();
      this.branches.forEach(branch => {
        ctx.moveTo(this.targetX, this.targetY);
        ctx.lineTo(this.targetX + branch.x, this.targetY + branch.y);
      });
      ctx.stroke();
    }

    ctx.restore();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  webs.forEach((web, index) => {
    web.update();
    web.draw();
    if (web.opacity <= 0) {
      webs.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}
animate();

// Shoot Web on Screen Click
window.addEventListener('click', (e) => {
  // Origin points from bottom corners (Web-Shooter stance)
  const startX = e.clientX < window.innerWidth / 2 ? 0 : window.innerWidth;
  const startY = window.innerHeight;
  webs.push(new WebLine(startX, startY, e.clientX, e.clientY));
});

// Interactive Buttons
document.getElementById('shootWebBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const targetX = window.innerWidth / 2;
  const targetY = window.innerHeight / 3;
  webs.push(new WebLine(0, window.innerHeight, targetX, targetY));
  webs.push(new WebLine(window.innerWidth, window.innerHeight, targetX, targetY));
});

// Spider-Sense Flash Effect
document.getElementById('activateSenseBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.style.transition = 'box-shadow 0.2s ease';
  document.body.style.boxShadow = 'inset 0 0 100px #FFD700';
  
  setTimeout(() => {
    document.body.style.boxShadow = 'none';
  }, 400);
});
