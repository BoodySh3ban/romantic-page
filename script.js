const cursor = document.getElementById("heart-cursor");
const heroImage = document.getElementById("heroImage");
const overlayText = document.getElementById("overlayText");
const textBox = document.getElementById("textContainer");
const ending = document.getElementById("ending");
const signature = document.getElementById("signature");
const music = document.getElementById("bgMusic");

/* Heart cursor movement */
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* Romantic Poetic Text - Promise + Emojis */
const romanticText = `
I make you this promise 🤍💌 —
not whispered, not temporary,
but written in the quiet parts of my soul ✨💖

No matter how loud the world becomes 🌎,
no matter how heavy the days feel 🌙,
I will not leave. I will stay ❤️

I will choose you 🌹
in moments of light ☀️,
and in moments that ask for strength 💪💫

Love, to me, is not perfection.
It is commitment 💞.
It is standing still when walking away feels easier 🌟

And so I promise you this —
as long as my heart remembers how to beat ❤️,
it will remember you 💌✨
`;

/* Click on image */
heroImage.addEventListener("click", () => {
  heroImage.style.opacity = "0.25";
  overlayText.style.display = "none";
  textBox.style.display = "block";

  /* Play music */
  music.volume = 0.6;
  music.play();

  /* Exploding hearts */
  explodeHearts(260);

  /* Start typing text */
  typeText(romanticText);

  /* Show ending */
  setTimeout(() => {
    ending.style.opacity = "1";
  }, 12000);

  /* Show personal signature */
  setTimeout(() => {
    signature.style.opacity = "1";
  }, 14000);
});

/* Massive heart explosion from center */
function explodeHearts(count) {
  for (let i = 0; i < count; i++) {
    createHeart("50%", "50%");
  }
}

/* Hearts on every click */
document.addEventListener("click", e => {
  for (let i = 0; i < 20; i++) {
    createHeart(e.clientX + "px", e.clientY + "px");
  }
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";

  heart.style.left = x;
  heart.style.top = y;

  heart.style.setProperty("--x", `${(Math.random() - 0.5) * window.innerWidth}px`);
  heart.style.setProperty("--y", `${(Math.random() - 0.5) * window.innerHeight}px`);

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3500);
}

/* Typing Effect */
function typeText(text) {
  textBox.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    textBox.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 35);
}
