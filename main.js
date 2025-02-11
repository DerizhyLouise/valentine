tailwind.config = {
	theme: {
		extend: {
			colors: {
				yellow: "#FAECBC",
				pink: "#D4668E",
				navy: "#0D192B",
			},
		},
	},
};

AOS.init();

// Floating Balloons Animation
function createBalloon() {
	const balloon = document.createElement("div");
	balloon.classList.add("balloon");
	balloon.innerHTML = "🎈";
	document.querySelector(".floating-balloons").appendChild(balloon);

	const startX = Math.random() * window.innerWidth;
	const duration = Math.random() * 3 + 2;

	balloon.style.left = `${startX}px`;
	balloon.style.animationDuration = `${duration}s`;

	setTimeout(() => {
		balloon.remove();
	}, duration * 1000);
}

setInterval(createBalloon, 300);

// Love Messages
const loveMessages = [
	"You make my heart smile ❤️",
	"I'm the luckiest to have you 💖",
	"You are my everything 💕",
	"You are my sunshine ☀️",
	"I adore you 😘",
];

let loveCount = 0;
function answerYes() {
	confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

	// Play love song
	document.getElementById("loveSong").play();

	// Show love message
	const message = document.getElementById("loveMessage");
	message.innerText =
		loveMessages[Math.floor(Math.random() * loveMessages.length)];
	message.classList.remove("hidden");

	// Increase love counter
	loveCount++;
	document.getElementById("loveCount").innerText = loveCount;

	if (loveCount % 5 === 0) {
		fireworks();
	}
	const yesButton = document.getElementById("yesButton");
	yesButton.style.transform = "scale(1.5)";
	yesButton.style.transition = "transform 0.3s ease";
}

let noClickCount = 0;
function answerNo() {
	const button = document.getElementById("noButton");

	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	const randomX = Math.random() * (viewportWidth - button.offsetWidth);
	const randomY = Math.random() * (viewportHeight - button.offsetHeight);

	button.style.position = "absolute";
	button.style.left = `${randomX}px`;
	button.style.top = `${randomY}px`;

	// Shrink the "No" button after multiple clicks
	noClickCount++;
	if (noClickCount > 5) {
		button.style.transform = "scale(0.8)";
	} else if (noClickCount > 10) {
		button.style.transform = "scale(0.6)";
	} else if (noClickCount > 15) {
		button.style.transform = "scale(0.4)";
	}
}

function fireworks() {
	for (let i = 0; i < 5; i++) {
		setTimeout(() => {
			confetti({
				particleCount: 100,
				angle: Math.random() * 360,
				spread: 100,
				startVelocity: 30,
				origin: { x: Math.random(), y: Math.random() * 0.5 },
			});
		}, i * 300);
	}
}

// Heart Trail Effect
document.addEventListener("mousemove", (e) => {
	const heart = document.createElement("div");
	heart.classList.add("heart-trail");
	heart.innerText = "❤️";
	document.body.appendChild(heart);
	heart.style.left = `${e.clientX}px`;
	heart.style.top = `${e.clientY}px`;

	setTimeout(() => {
		heart.remove();
	}, 800);
});
