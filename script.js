// Typing effect for wish page
function typeWriter(text, elementId, speed = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Hearts animation for wish page
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'hearts';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
function startHearts() {
    setInterval(createHeart, 300);
}

// Slideshow for gallery page
let slideIndex = 0;
function nextPhoto(photos, elementId) {
    slideIndex = (slideIndex + 1) % photos.length;
    document.getElementById(elementId).src = photos[slideIndex];
}

// Confetti animation
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confettiCount = 300;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * confettiCount,
            color: `hsl(${Math.random() * 360},100%,50%)`,
            tilt: Math.random() * 10 - 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
            ctx.stroke();
            c.tilt += c.tiltAngleIncrement;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            if (c.y > canvas.height) c.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// Balloon animation
function startBalloons() {
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 10000);
    }
    setInterval(createBalloon, 300);
}
