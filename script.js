const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionPage = document.getElementById("questionPage");
const lovePage = document.getElementById("lovePage");
const effects = document.getElementById("effects");
const butterflies = document.getElementById("butterflies");
const text = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

// NO button moves but stays inside screen
noBtn.addEventListener("mouseover", () => {
    const padding = 20; // space from edges
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

// YES button 💖
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

// Floating celebration effects 🌸💕
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

// Confetti layering 🎆
function confettiBlast() {
    for (let i = 0; i < 4; i++) {
        setTimeout(createEffects, i * 400);
    }
}

// Persistent butterflies 🦋
function createButterflies() {
    const safeMargin = 50; // avoid edges
    for (let i = 0; i < 10; i++) {
        const b = document.createElement("div");
        b.className = "butterfly";
        b.innerHTML = "🦋";

        const x = Math.random() * (window.innerWidth - safeMargin * 2) + safeMargin;
        const y = Math.random() * (window.innerHeight - safeMargin * 2) + safeMargin;

        b.style.left = x + "px";
        b.style.top = y + "px";

        b.style.animationDuration =
            `${3 + Math.random() * 3}s, ${4 + Math.random() * 4}s, ${5 + Math.random() * 5}s`;

        butterflies.appendChild(b);
    }
}

// Typing message 💌
const message = `
Happy Valentine’s Day, Shaleen ❤️

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
        text.scrollTop = text.scrollHeight; // auto-scroll down as text appears
        setTimeout(typeMessage, 40);
    }
}
