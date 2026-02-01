const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionPage = document.getElementById("questionPage");
const lovePage = document.getElementById("lovePage");
const effects = document.getElementById("effects");
const butterflies = document.getElementById("butterflies");
const flowers = document.getElementById("flowers");
const hearts = document.getElementById("hearts");
const text = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

// NO button moves dynamically
function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = window.innerWidth - btnWidth - 10;
    const maxY = window.innerHeight - btnHeight - 10;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// NO button triggers
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES button
yesBtn.addEventListener("click", () => {
    music.play();
    questionPage.classList.add("hidden");

    createEffects();
    createButterflies();
    createFlowers();
    createHearts();

    setTimeout(() => {
        effects.innerHTML = "";
        lovePage.classList.remove("hidden");
        typeMessage();
    }, 3000);
});

// All effect creation functions same as previous version
// createEffects, createButterflies, createFlowers, createHearts

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
        text.scrollTop = text.scrollHeight;
        setTimeout(typeMessage, 40);
    }
}

// Regenerate butterflies, flowers, hearts on resize
window.addEventListener("resize", () => {
    createButterflies();
    createFlowers();
    createHearts();
});
