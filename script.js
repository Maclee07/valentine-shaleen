const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionPage = document.getElementById("questionPage");
const lovePage = document.getElementById("lovePage");
const effects = document.getElementById("effects");
const butterflies = document.getElementById("butterflies");
const text = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

// NO button moves dynamically, stays in screen
noBtn.addEventListener("mouseover", () => {
    const padding = 20;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES button
yesBtn.addEventListener("click", () => {
    music.play();
    questionPage.classList.add("hidden");

    createEffects();
    confettiBlast();
    createButterflies();

    setTimeout(() => {
        effects.innerHTML = "";
        lovePage.classList.remove("hidden");
        typeMessage();
    }, 3000);
});

// Celebration effects
function createEffects() {
    const icons = ["🌸", "💖", "💐", "💕"];
    for (let i = 0; i < 35; i++) {
        const el = document.createElement("div");
        el.className = "effect";
        el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = (Math.random() * 3 + 2) + "s";
        effects.appendChild(el);
    }
}

// Confetti
function confettiBlast() {
    for (let i = 0; i < 4; i++) {
        setTimeout(createEffects, i * 400);
    }
}

// Butterflies
function createButterflies() {
    const safeMargin = 30;
    const count = window.innerWidth < 600 ? 20 : 35; // more butterflies
    butterflies.innerHTML = ""; // clear old butterflies

    for (let i = 0; i < count; i++) {
        const b = document.createElement("div");
        b.className = "butterfly";
        b.innerHTML = "🦋";

        // random initial position
        const x = Math.random() * (window.innerWidth - safeMargin * 2) + safeMargin;
        const y = Math.random() * (window.innerHeight - safeMargin * 2) + safeMargin;

        b.style.left = x + "px";
        b.style.top = y + "px";

        // responsive size
        const size = window.innerWidth < 600 ? 40 + Math.random() * 20 : 32 + Math.random() * 20;
        b.style.fontSize = size + "px";

        // animation duration variations
        const durY = 3 + Math.random() * 4;
        const durX = 4 + Math.random() * 4;

        b.style.animation = `floatY ${durY}s ease-in-out infinite alternate, 
                             floatX ${durX}s ease-in-out infinite alternate,
                             fadeIn 2s forwards`;

        butterflies.appendChild(b);
    }
}

// Typing message
const message = `
Happy Valentine’s Day, Sharleen ❤️

From the day you came into my life,
everything started feeling right.

Celebrating our 3rd anniversary on 2nd January
reminded me how strong, real,
and beautiful our love has become.

Thank you for choosing me,
for loving me,
and for being my forever person.

I choose you — always 💕
`;

let index = 0;
function typeMessage() {
    if (index < message.length) {
        text.innerHTML += message.charAt(index);
        index++;
        text.scrollTop = text.scrollHeight; // auto-scroll inside box
        setTimeout(typeMessage, 40);
    }
}

// Optional: adjust butterflies when resizing
window.addEventListener("resize", () => {
    createButterflies();
});
