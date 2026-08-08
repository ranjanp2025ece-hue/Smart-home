// Dynamic Spider-Web Canvas Background Effect
const canvas = document.getElementById('webCanvas');
const ctx = canvas.getContext('2d');

let webs = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class SpideyWebLine {
  constructor(startX, startY, targetX, targetY) {
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.progress = 0;
    this.opacity = 1;
  }

  update() {
    if (this.progress < 1) {
      this.progress += 0.12;
    } else {
      this.opacity -= 0.02;
    }
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.strokeStyle = '#00D2FF';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00D2FF';

    const currentX = this.startX + (this.targetX - this.startX) * Math.min(this.progress, 1);
    const currentY = this.startY + (this.targetY - this.startY) * Math.min(this.progress, 1);

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    ctx.restore();
  }
}

function renderWebs() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  webs.forEach((web, index) => {
    web.update();
    web.draw();
    if (web.opacity <= 0) webs.splice(index, 1);
  });
  requestAnimationFrame(renderWebs);
}
renderWebs();

// Click screen to shoot web strings
window.addEventListener('click', (e) => {
  const originX = e.clientX < window.innerWidth / 2 ? 0 : window.innerWidth;
  webs.push(new SpideyWebLine(originX, window.innerHeight, e.clientX, e.clientY));
});

// Appliance Card Toggle Logic
const toggles = document.querySelectorAll('.appliance-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('change', (e) => {
    e.stopPropagation();
    const card = toggle.closest('.appliance-card');
    const statusPill = card.querySelector('.status-pill');

    if (toggle.checked) {
      card.classList.add('active');
      statusPill.classList.add('active-pill');
      statusPill.textContent = 'ACTIVE';
    } else {
      card.classList.remove('active');
      statusPill.classList.remove('active-pill');
      statusPill.textContent = 'OFFLINE';
    }
  });
});

// Master Power Toggle Button
const masterBtn = document.getElementById('masterToggleBtn');
let allOn = true;

masterBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  allOn = !allOn;

  toggles.forEach(toggle => {
    toggle.checked = allOn;
    toggle.dispatchEvent(new Event('change'));
  });

  masterBtn.textContent = allOn ? "ALL APPLIANCES ON" : "ALL APPLIANCES OFF";
  masterBtn.style.backgroundColor = allOn ? "var(--spidey-red)" : "#2A3447";
});

// Emergency Lockdown Button (Spider-Sense Flash)
document.getElementById('panicBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.style.transition = 'box-shadow 0.2s ease';
  document.body.style.boxShadow = 'inset 0 0 120px #FFD700';

  // Shoot multi webs
  webs.push(new SpideyWebLine(0, 0, window.innerWidth / 2, window.innerHeight / 2));
  webs.push(new SpideyWebLine(window.innerWidth, 0, window.innerWidth / 2, window.innerHeight / 2));

  setTimeout(() => {
    document.body.style.boxShadow = 'none';
  }, 500);
});
