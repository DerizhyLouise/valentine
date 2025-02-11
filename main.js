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

const loveMessages = [
	"You make my heart smile ❤️",
	"I'm the luckiest to have you 💖",
	"You are my everything 💕",
	"You are my sunshine ☀️",
	"I adore you 😘",
];

const gifts = [
	"💐 A bouquet of virtual roses!",
	"🍫 A box of chocolate, just for you!",
	"(´㉨`) A Capybara!",
	"🎶 A love song dedicated to you!",
	"💍 A virtual engagement ring! 😘",
];

let loveCount = 0;
function answerYes() {
	confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

	const message = document.getElementById("loveMessage");
	message.innerText =
		loveMessages[Math.floor(Math.random() * loveMessages.length)];
	message.classList.remove("hidden");

	loveCount++;
	document.getElementById("loveCount").innerText = loveCount;

	if (loveCount % 5 === 0) {
		fireworks();
	}
	if (loveCount % 10 === 0) {
		bigFireworks();
	}
	if (loveCount === 25) {
		showLoveLetter();
	}
	if (loveCount === 50) {
		document.getElementById("giftBox").classList.remove("hidden");
	}
	if (loveCount === 100) {
		fireworksShow();
		for (let i = 0; i < 25; i++) {
			setInterval(() => {
				createHeartRain();
			}, 500);
		}
	}

	for (let i = 0; i < 10; i++) {
		createHeartRain();
	}

	const yesButton = document.getElementById("yesButton");
	yesButton.style.transform = "scale(1.2)";
	yesButton.style.transition = "transform 0.3s ease";
}

let noClickCount = 0;
function answerNo() {
	const button = document.getElementById("noButton");
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	const randomX = Math.random() * (viewportWidth - button.offsetWidth);
	const randomY = Math.random() * (viewportHeight - button.offsetHeight);
	const randomRotation = Math.random() * 360;
	const randomSize = 0.5 + Math.random() * 1;

	button.style.position = "absolute";
	button.style.left = `${randomX}px`;
	button.style.top = `${randomY}px`;
	button.style.transform = `rotate(${randomRotation}deg) scale(${randomSize})`;

	noClickCount++;
	if (noClickCount > 10 && noClickCount < 25) {
		button.innerText = "Pls stop 😭";
	} else if (noClickCount > 25) {
		button.innerText = "Ok, I'll disappear... 🤪";
		setTimeout(() => (button.style.display = "none"), 2000);
	}
}

function showLoveLetter() {
	const letter = document.getElementById("loveLetter");
	letter.classList.remove("hidden");

	letter.animate([{ bottom: "-200px" }, { bottom: "50px" }], {
		duration: 1000,
		easing: "ease-out",
		fill: "forwards",
	});

	setTimeout(() => {
		letter.animate([{ bottom: "50px" }, { bottom: "-200px" }], {
			duration: 1000,
			easing: "ease-in",
			fill: "forwards",
		});
		setTimeout(() => letter.classList.add("hidden"), 1000);
	}, 5000);
}

function createHeartRain() {
	const heart = document.createElement("div");
	heart.classList.add("falling-heart");
	heart.innerText = "❤️";
	document.body.appendChild(heart);

	heart.style.left = `${Math.random() * window.innerWidth}px`;
	heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

	setTimeout(() => {
		heart.remove();
	}, 3000);
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

function openGift() {
	let surprise = gifts[Math.floor(Math.random() * gifts.length)];
	document.getElementById("giftMessage").innerText = surprise;
	document.getElementById("giftMessage").classList.remove("hidden");
}

function floatingHearts() {
	const heart = document.createElement("div");
	heart.innerText = ["💖", "💘", "😍", "😘", "❤️"][
		Math.floor(Math.random() * 5)
	];
	heart.classList.add("heart-trail");

	heart.style.left = Math.random() * window.innerWidth + "px";
	heart.style.top = "100%";
	document.body.appendChild(heart);

	heart.animate(
		[
			{ transform: "translateY(0)", opacity: 1 },
			{ transform: `translateY(-${window.innerHeight}px)`, opacity: 0 },
		],
		{ duration: 3000 }
	);

	setTimeout(() => heart.remove(), 3000);
}

function changeBackground() {
	const colors = ["#FAECBC", "#FFDDC1", "#FFC0CB", "#FFA7A7", "#FFD700"];
	document.body.style.backgroundColor = colors[loveCount % colors.length];
}

function bigFireworks() {
	for (let i = 0; i < 10; i++) {
		setTimeout(() => {
			confetti({
				particleCount: 200,
				spread: 160,
				startVelocity: 40,
				origin: { x: Math.random(), y: Math.random() },
			});
		}, i * 300);
	}
}

function sparkleEffect(x, y) {
	for (let i = 0; i < 10; i++) {
		setTimeout(() => {
			const sparkle = document.createElement("div");
			sparkle.classList.add("sparkle");
			sparkle.style.left = `${x + Math.random() * 30 - 15}px`;
			sparkle.style.top = `${y + Math.random() * 30 - 15}px`;
			document.body.appendChild(sparkle);
			setTimeout(() => sparkle.remove(), 500);
		}, i * 50);
	}
}

const quizQuestions = [
	{
		question: "What is my Favorite Favor?",
		options: ["Spicy", "Cheese", "Peanut"],
		correct: "Cheese",
	},
	{
		question: "Which day is our Anniversary Day?",
		options: ["22 Feb", "27 Apr", "23 May"],
		correct: "22 Feb",
	},
	{
		question: "Who am I to You?",
		options: ["Friend", "Enemy", "Love"],
		correct: "Love",
	},
];

let currentQuestionIndex = 0;

function loadQuestion() {
	if (currentQuestionIndex >= quizQuestions.length) {
		document.getElementById("quizContainer").classList.add("hidden");
		document.getElementById("willBeMyValentine").classList.remove("hidden");
		return;
	}

	const questionData = quizQuestions[currentQuestionIndex];
	document.getElementById("quizQuestion").innerText = questionData.question;
	document.getElementById("quizOptions").innerHTML = "";

	questionData.options.forEach((option) => {
		const btn = document.createElement("button");
		btn.innerText = option;
		btn.className =
			"btn bg-yellow-400 text-navy px-4 py-2 rounded-lg font-bold";
		btn.onclick = () => checkAnswer(option, questionData.correct);
		document.getElementById("quizOptions").appendChild(btn);
	});
}

function checkAnswer(selected, correct) {
	if (selected === correct) {
		currentQuestionIndex++;
		document.getElementById("quizMessage").classList.add("hidden");
		loadQuestion();
	} else {
		document.getElementById("quizMessage").innerText =
			"❌ Wrong! Try again!";
		document.getElementById("quizMessage").classList.remove("hidden");
	}
}

function loveLetter() {
	const letter = document.getElementById("loveLetter2");
	letter.classList.remove("hidden");

	letter.animate([{ bottom: "-200px" }, { bottom: "50px" }], {
		duration: 1000,
		easing: "ease-out",
		fill: "forwards",
	});

	setTimeout(() => {
		letter.animate([{ bottom: "50px" }, { bottom: "-200px" }], {
			duration: 1000,
			easing: "ease-in",
			fill: "forwards",
		});
	}, 10000);
}

function startFlowerRain() {
	const flowerContainer = document.querySelector(".flower-rain");

	function createFlower() {
		const flower = document.createElement("div");
		flower.classList.add("flower");
		flower.innerHTML = "🌸";
		flower.style.left = Math.random() * 100 + "vw";
		flower.style.animationDuration = Math.random() * 3 + 2 + "s";

		flowerContainer.appendChild(flower);

		setTimeout(() => {
			flower.remove();
		}, 5000);
	}

	setInterval(createFlower, 300);
}

function fireworksShow() {
	for (let i = 0; i < 50; i++) {
		setTimeout(() => {
			confetti({
				particleCount: 500,
				spread: 200,
				startVelocity: 40,
				origin: { x: Math.random(), y: Math.random() * 0.6 },
			});
		}, i * 500);
	}
}

document.getElementById("willBeMyValentine").classList.add("hidden");

document
	.getElementById("yesButton")
	.addEventListener("click", changeBackground);

document.getElementById("yesButton").addEventListener("click", floatingHearts);

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

document.getElementById("yesButton").addEventListener("click", (e) => {
	sparkleEffect(e.clientX, e.clientY);
});

document.addEventListener(
	"click",
	() => {
		document.getElementById("loveSong").play();
	},
	{ once: true }
);

startFlowerRain();
loadQuestion();
