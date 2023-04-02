let chickenCount = 1;

const chicken = document.createElement("div");
chicken.classList.add("chicken-css");
document.body.appendChild(chicken);

const eyeLeft = document.createElement("div");
eyeLeft.classList.add("eye", "eye-left");
chicken.appendChild(eyeLeft);

const eyeRight = document.createElement("div");
eyeRight.classList.add("eye", "eye-right");
chicken.appendChild(eyeRight);

const footLeft = document.createElement("div");
footLeft.classList.add("foot", "foot-left");
chicken.appendChild(footLeft);

const footRight = document.createElement("div");
footRight.classList.add("foot", "foot-right");
chicken.appendChild(footRight);

const wingLeft = document.createElement("div");
wingLeft.classList.add("wing", "wing-left");
chicken.appendChild(wingLeft);

const wingRight = document.createElement("div");
wingRight.classList.add("wing", "wing-right");
chicken.appendChild(wingRight);

const beak = document.createElement("div");
beak.classList.add("beak");
chicken.appendChild(beak);

const comb = document.createElement("div");
comb.classList.add("comb");
chicken.appendChild(comb);

function moveChicken(chicken) {
  const x = Math.random() * (document.documentElement.clientWidth - chicken.clientWidth);
  const y = Math.random() * (document.documentElement.clientHeight - chicken.clientHeight);
  chicken.style.left = x + "px";
  chicken.style.top = y + "px";
  setTimeout(() => moveChicken(chicken), Math.random() * 5000 + 3000);
}

function blinkEyes() {
  eyeLeft.classList.add("closed");
  eyeRight.classList.add("closed");
  setTimeout(() => {
    eyeLeft.classList.remove("closed");
    eyeRight.classList.remove("closed");
  }, 200);
  setTimeout(() => blinkEyes(), 10000);
}

moveChicken(chicken);
blinkEyes();
