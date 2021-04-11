const countdownContainer = document.querySelector(".countdown-container");
const daysSpan = countdownContainer.querySelector(".days");
const hoursSpan = countdownContainer.querySelector(".hours");
const minutesSpan = countdownContainer.querySelector(".minutes");
const secondsSpan = countdownContainer.querySelector(".seconds");

function countdownTimer() {
	let distance = 171800000;
	let days, hours, minutes, seconds;

	var intervalTimer = setInterval(() => {
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		updateDom(days, hours, minutes, seconds);
		distance -= 1000;

		if (distance < 0) {
			clearInterval(intervalTimer);
		}
	}, 1000);
}

function updateDom(days, hours, minutes, seconds) {
	daysSpan.innerHTML = days >= 10 ? days : `0${days}`;
	hoursSpan.innerHTML = hours >= 10 ? hours : `0${hours}`;
	minutesSpan.innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
	secondsSpan.innerHTML = seconds >= 10 ? seconds : `0${seconds}`;
}

countdownTimer();
