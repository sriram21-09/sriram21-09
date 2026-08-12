/* ═══════════════════════════════════════════
   PORTFOLIO JS — Kasukurthi Sriram
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTyping();
  initCounters();
  initScrollReveal();
  initCanvas();
  initTerminalLive();
});

/* ═══════════ NAV ═══════════ */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const onScroll = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ═══════════ TYPING EFFECT ═══════════ */
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'SOC Analyst',
    'Detection Engineer',
    'Honeypot Builder',
    'Threat Hunter',
    'Security Researcher',
    'Incident Responder'
  ];

  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    el.textContent = deleting
      ? current.substring(0, charIdx--)
      : current.substring(0, charIdx++);

    if (!deleting && charIdx > current.length) {
      setTimeout(() => { deleting = true; type(); }, 2000);
      return;
    }
    if (deleting && charIdx < 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, deleting ? 40 : 80);
  }
  type();
}

/* ═══════════ ANIMATED COUNTERS ═══════════ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const speed = 200;

  const countUp = (counter) => {
    const target = +counter.getAttribute('data-count');
    const suffix = counter.getAttribute('data-suffix') || '';
    const updateCount = () => {
      const targetInt = target;
      const count = +counter.innerText.replace(/\D/g, '');
      const inc = targetInt / speed;
      
      if (count < targetInt) {
        counter.innerText = Math.ceil(count + inc) + suffix;
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target + suffix;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ═══════════ SCROLL REVEAL ═══════════ */
function initScrollReveal() {
  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ═══════════ CANVAS BACKGROUND ═══════════ */
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  // Skip canvas animation for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animating = true;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create particles
  const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    if (!animating) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
      ctx.fill();
    });

    // Connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  // Pause when hero is not visible
  const heroObserver = new IntersectionObserver(([entry]) => {
    animating = entry.isIntersecting;
    if (animating) requestAnimationFrame(draw);
  }, { threshold: 0 });
  heroObserver.observe(canvas.closest('.hero'));
}

/* ═══════════ TERMINAL LIVE LOG ═══════════ */
function initTerminalLive() {
  const el = document.getElementById('terminalLive');
  if (!el) return;

  const events = [
    { icon: '🔴', type: 'ALERT', msg: 'SSH brute-force from 185.220.101.x — threat_score: 0.92' },
    { icon: '🟡', type: 'WARN', msg: 'HTTP honeypot: SQLi probe detected on /admin — MITRE T1190' },
    { icon: '🟢', type: 'INFO', msg: 'FTP honeypot: anonymous login captured — logging credentials' },
    { icon: '🔴', type: 'ALERT', msg: 'SMTP relay abuse attempt — attacker profiled (GeoIP: RU)' },
    { icon: '🟡', type: 'WARN', msg: 'Anomaly detected: port scan sweep (Isolation Forest score: -0.87)' },
    { icon: '🟢', type: 'INFO', msg: 'ML retrain pipeline triggered — Random Forest accuracy: 0.94' },
    { icon: '🟡', type: 'WARN', msg: 'HTTP honeypot: directory traversal attempt (../../../etc/passwd)' },
    { icon: '🔴', type: 'ALERT', msg: 'TAXII feed updated — 14 new threat indicators exported (STIX 2.1)' },
    { icon: '🟢', type: 'INFO', msg: 'WebSocket: 3 SOC dashboard clients connected' },
    { icon: '🟡', type: 'WARN', msg: 'SSH: credential stuffing detected — top password: admin123' },
  ];

  let idx = 0;
  function showEvent() {
    const e = events[idx % events.length];
    const colors = { ALERT: '#ef4444', WARN: '#f59e0b', INFO: '#00ff88' };
    el.innerHTML = `<span class="t-green">▶</span> <span style="color:${colors[e.type]}">[${e.type}]</span> <span class="t-gray">${e.msg}</span>`;
    el.style.opacity = '0';
    el.style.animation = 'none';
    el.offsetHeight; // Force reflow
    el.style.animation = 'logAppear 0.4s forwards';
    idx++;
    setTimeout(showEvent, 3500);
  }
  setTimeout(showEvent, 2000);
}
