/*
	quiz web app
*/

// html references
const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');

// events
startButton.addEventListener('click', loadNextQuestion);

// callback function
function loadNextQuestion() {

	const questContainer = createElement('div', 'quest-container');
	quizContainer.appendChild(questContainer);

	const question = createElement('h2', 'question', "What is 2 + 2?");
	questContainer.appendChild(question);

	const answers = createElement('div', 'answers');
	questContainer.appendChild(answers);

	const option1 = createElement('div', 'option', '2');
	const option2 = createElement('div', 'option', '4');
	const option3 = createElement('div', 'option', '6');
	answers.appendChild(option1);
	answers.appendChild(option2);
	answers.appendChild(option3);

}

// helper function to create html elements
function createElement(tagName, className, text) {

	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;

}