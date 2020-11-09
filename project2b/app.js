/*
	quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');

// quiz questions
let questions = [];
let currentQuestion = 0;
let score = 0;

// there is a total of 10 questions
questions.push(new Question("How many states make up the United States?", "50", ["48", "64"]));
questions.push(new Question("What country has a bigger population than the UK? (67,000,000+)", "Turkey", ["Canada", "France"]));
questions.push(new Question("When was Facebook officially founded?", "Feburary 2004", ["March 2006", "August 2003"]));
questions.push(new Question("What word has the definition of 'bold or arrogant disregard of normal restraints'?", "Audacity", ["Attitude", "Arrogance"]));
questions.push(new Question("What is the distance from the Earth to the Sun?", "92.056 million miles", ["135.04 million miles", "67.24 million miles"]));
questions.push(new Question("What year did Tim Berners-Lee invent HTML?", "1989", ["1984", "1993"]));
questions.push(new Question("[Finish The Lyrics] 'Cause baby, you're a ________", "Firework", ["Grenade", "Rocket Launcher"]));
questions.push(new Question("What is the most viewed YouTube video of all time? (As of 2020)", "Baby Shark - Pinkfong", ["Despacito - Luis Fonsi", "Shape of You - Ed Sheeran"]));
questions.push(new Question("How many times is the word 'Bee' said in DreamWorks Bee Movie?", "172", ["243", "97"]));
questions.push(new Question("What is 1+1? (In Spanish)", "El Dos", ["El Uno", "El Cuatro"]));

/* sources for questions

- https://worldpopulationreview.com/countries

- https://www.merriam-webster.com/dictionary/audacity

*/

console.log(questions);

// events
startButton.addEventListener('click', function() {
	startButton.classList.add('disable');
	message.textContent = "Choose an answer."
	loadNextQuestion();
});

nextButton.addEventListener('click', function() {
	quizContainer.textContent = '';
	nextButton.classList.add('disable');
	currentQuestion++;
	loadNextQuestion();
	message.textContent = "Choose an answer."
});

endButton.addEventListener('click', function() {
	quizContainer.textContent = '';
	endButton.classList.add('disable');
	//message.textContent = "You got " + score + " out of " + questions.length;
	message.textContent = `You got ${score} out of ${questions.length}.`
	if (score == 0) {
		message.textContent += " Tough luck!"
	} else if (score == 1 || score == 2 || score == 3) {
		message.textContent += " Well at least you tried."
	} else if (score == 4 || score == 5 || score == 6) {
		message.textContent += " That's great!"
	} else if (score == 7 || score == 8 || score == 9) {
		message.textContent += " So close! You did Amazing."
	} else if (score == 10) {
		message.textContent += " You weren't suppose to get it all right but congrats!"
	}
});

// callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);

}

function questionAnswered(isCorrect) {
	if (isCorrect) {
		message.textContent = "Correct!";
		score++;
	} else {
		message.textContent = "Incorrect!";
	}

	if (currentQuestion < questions.length - 1) {
		nextButton.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}
}

// helper function to create html elements
function createElement(tagName, className, text) {

	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;

}