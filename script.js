const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionPage = document.getElementById("questionPage");
const lovePage = document.getElementById("lovePage");
const effects = document.getElementById("effects");
const butterflies = document.getElementById("butterflies");
const flowers = document.getElementById("flowers");
const text = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

// NO button moves dynamically, never clickable
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
    createButterflies();
    createFlowers();

    setTimeout(() => {
        effects.innerHTML = "";
        lovePage.classList.remove("hidden");
        typeMessage();
    }, 3000);
});

// Celebration effects
function createEffects() {
    const icons = ["🌸", "💖", "💐", "💕"];
    for (let i = 0; i < 40; i++) {
        const el = document.createElement("div");
        el.className = "effect";
        el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = (Math.random() * 3 + 2) + "s";
        effects.appendChild(el);
    }
}

// Butterflies
function createButterflies() {
    const safeMargin = 30;
    const count = window.innerWidth < 600 ? 30 : 45;
    butterflies.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const b = document.createElement("div");
        b.className = "butterfly";
        b.innerHTML = "🦋";

        const x = Math.random() * (window.innerWidth - safeMargin * 2) + safeMargin;
        const y = Math.random() * (window.innerHeight - safeMargin * 2) + safeMargin;

        b.style.left = x + "px";
        b.style.top = y + "px";

        const size = window.innerWidth < 600 ? 50 + Math.random() * 30 : 40 + Math.random() * 30;
        b.style.fontSize = size + "px";

        const durY = 3 + Math.random() * 4;
        const durX = 4 + Math.random() * 4;

        b.style.animation = `floatY ${durY}s ease-in-out infinite alternate, 
                             floatX ${durX}s ease-in-out infinite alternate,
                             fadeIn 2s forwards`;

        butterflies.appendChild(b);
    }
}

// Flowers
function createFlowers() {
    const safeMargin = 30;
    const count = window.innerWidth < 600 ? 20 : 30;
    flowers.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const f = document.createElement("div");
        f.className = "flower";
        const flowerEmojis = ["🌸","🌼","🌺","💐"];
        f.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

        const x = Math.random() * (window.innerWidth - safeMargin * 2) + safeMargin;
        const y = Math.random() * (window.innerHeight - safeMargin * 2) + safeMargin;

        f.style.left = x + "px";
        f.style.top = y + "px";

        const size = window.innerWidth < 600 ? 45 + Math.random() * 20 : 35 + Math.random() * 15;
        f.style.fontSize = size + "px";

        const durY = 4 + Math.random() * 4;
        f.style.animation = `floatY ${durY}s ease-in-out infinite alternate, fadeIn 2s forwards`;

        flowers.appendChild(f);
    }
}

// Typing message
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
        text.scrollTop = text.scrollHeight;
        setTimeout(typeMessage, 40);
    }
}

// Regenerate butterflies and flowers on resize
window.addEventListener("resize", () => {
    createButterflies();
    createFlowers();
});
