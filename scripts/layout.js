const sectionStart = document.getElementById("section_start");
const bodyTag = document.querySelector("body");

const startButton = document.createElement("button");

function createForm() {
	let label = document.createElement("label");
	let form = document.createElement("form");
	let input = document.createElement("input");

	//DONE Add label
	label.innerHTML = "Add your name:";
	form.id = "inputForm";

	input.type = "text";
	input.placeholder = "First name";
	input.id = "userNameInput";

	startButton.innerHTML = "start the quiz";
	startButton.type = "submit";
	startButton.id = "startButton";

	form.append(label);
	form.append(input);
	form.append(startButton);
	sectionStart.appendChild(form);
}

function createBtn(btnId, btnText, link, btnClass) {
	let anchor = document.createElement("a");
	let button = document.createElement("button");
	anchor.setAttribute("href", link);

	button.id = btnId;
	button.innerHTML = btnText;
	button.className = btnClass;

	anchor.append(button);
	return anchor;
}

function createDiv(id, className, appendPlace) {
	let div = document.createElement("div");
	div.id = id;
	div.className = className;

	appendPlace.append(div);

	return div;
}

createForm();

export { startButton };

function createSection(id) {
	let section = document.createElement("section");
	section.id = id;
	bodyTag.append(section);

	return section;
}

//Section is an object
function createContent(section, section_id, QnA) {
	//Questions
	let question = document.createElement("h1");
	question.innerHTML = QnA.question;
	section.append(question);
	//Div BtnWrapper
	let div = createDiv(section.id + "Div", "answer_wrapper", section);

	// Buttons
	for (let i = 0; i < QnA.answers.length; i++) {
		let button = createBtn(
			section.id + "button",
			QnA.answers[i],
			"#section" + (section_id + 1).toString(),
			"answers"
		);
		div.append(button);
	}
}

async function getQuestions() {
	try {
		let fetchQuestions = await fetch("questions.json");
		//QuestionsJs
		let questionsAsJson = await fetchQuestions.json();

		for (let i = 1; i <= Object.keys(questionsAsJson).length; i++) {
			let section = createSection("section" + i.toString());

			//CONTENT
			createContent(section, i, questionsAsJson[i]);
		}
		//dont want to execute second function WHYYY????
		createResultSection();
		createSubmitResultsSection();
	} catch (error) {
		console.log("error", error);
	}
}
getQuestions();

//To calculate a category with biggest click number
let categoryLetter = ["a", "b", "c", "d"];

let clickNumbers = [0, 0, 0, 0];

let resultCategory = "";
//when btn is clicked corresponding clickNumber must be increased by 1

// returns a letter
function getCategory() {
	let i_max = clickNumbers.indexOf(Math.max(...clickNumbers));
	let letter = categoryLetter[i_max];
	return (resultCategory = letter);
}

getCategory(clickNumbers);
// console.log(getCategory(clickNumbers));

//Submit results page
function createSubmitResultsSection() {
	let section = createSection("section9");

	//Text "Click this btn to see your results"
	let showResultsText = document.createElement("h1");
	showResultsText.innerHTML = "Click this button to show your result";
	showResultsText.className = "resultsH1";
	section.append(showResultsText);

	//Div
	let div = createDiv("section9Div", "sectionSubmit", section);
	section.append(div);

	//btn "submit"
	let btn = createBtn("btn_Last", "SHOW ME MY RESULTS!", "section9", "");
	div.append(btn);

	//calculate results when btn is clicked
	btn.addEventListener("click", getCategory);
}

// console.log(resultCategory);

//TODO finish this function, find a way to access keys from json to compare
async function getMovies() {
	try {
		let fetchMovies = await fetch("movie.json");
		//QuestionsJs
		let moviesAsJs = await fetchMovies.json();
		let arrayOfKeys = Object.keys(moviesAsJs);
		console.log(arrayOfKeys);
		// console.log(moviesAsJs);
		for (let i = 1; i <= Object.keys(moviesAsJs).length; i++) {
			console.log(JSON.stringify(moviesAsJs[i]));
			// if (resultCategory === moviesAsJs[i].toString()) {
			// 	// console.log(moviesAsJs[i].toString());
			// }
		}
	} catch (error) {
		console.log("error", error);
	}
}
getMovies();

//Last page
function createResultSection() {
	let section = createSection("section10");
	//Div
	let div = createDiv("section10Div", "sectionResults", section);
	section.append(div);
	//random chosen movie from the category

	//p "Your category is..." ( result from get category)
	let heading = document.createElement("h1");
	heading.innerHTML = "Your category is ";
	//movie title and the year

	//on the left side the movie poster
}
