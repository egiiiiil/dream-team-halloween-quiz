const sectionStart = document.getElementById("section_start");
const bodyTag = document.querySelector("body");

const startButton = document.createElement("button");

function createForm() {
	let label = document.createElement("label");
	let form = document.createElement("form");
	let input = document.createElement("input");

	//DONE Add label
	label.innerHTML = "Add your name:";
	label.htmlFor = "userNameInput"
	form.id = "inputForm";

	input.type = "text";
	input.placeholder = "First name";
	input.id = "userNameInput";
	input.name = "userNameInput"

	startButton.innerHTML = "start the quiz";
	startButton.type = "submit";
	startButton.id = "startButton";

	form.append(label);
	form.append(input);
	form.append(startButton);
	sectionStart.appendChild(form);
}



function createBtn(btnText, link, btnClass) {
	//btnId
	let anchor = document.createElement("a");
	let button = document.createElement("button");
	anchor.setAttribute("href", link);

	//button.id = btnId;
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

const answerCategory = ["a", "b", "c", "d"];

//Section is an object
function createContent(section, section_id, QnA) {
	//Questions
	let question = document.createElement("h1");
	question.innerHTML = QnA.question;
	section.append(question);
	//Div BtnWrapper
	let div = createDiv(section.id + "Div", "answer_wrapper", section);
	//===============NEW
	div.addEventListener("click", function (event) {
		if (event.target.tagName === "BUTTON") {
			console.log("class is", event.target.classList[0]);
			const userAnswer = event.target.classList[0];
			console.log(userAnswer);
			recordUserAnswerToArray(userAnswer);
		}
	});

	//===============END NEW
	// Buttons
	for (let i = 0; i < QnA.answers.length; i++) {
		let button = createBtn(
			// section.id + "button", // this creates not unique IDs for buttons, so now all buttons in one section have the same IDs
			QnA.answers[i],
			"#section" + (section_id + 1).toString(),
			// "answers"
			`${answerCategory[i]} answers`
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
		createSubmitResultsSection();
		createResultSection();
	} catch (error) {
		console.log("error", error);
	}
}
getQuestions();

let arrayOfUserAnswers = [0, 0, 0, 0];

function recordUserAnswerToArray(userAnswer) {
	if (userAnswer === "a") {
		arrayOfUserAnswers[0]++;
		console.log(arrayOfUserAnswers);
	} else if (userAnswer === "b") {
		arrayOfUserAnswers[1]++;
		console.log(arrayOfUserAnswers);
	} else if (userAnswer === "c") {
		arrayOfUserAnswers[2]++;
		console.log(arrayOfUserAnswers);
	} else if (userAnswer === "d") {
		arrayOfUserAnswers[3]++;
		console.log(arrayOfUserAnswers);
	}
}
//To calculate a category with biggest click number

let resultCategory = "";
//when btn is clicked corresponding clickNumber must be increased by 1

// returns a letter
function getCategory() {
  let categoriesIndex = [];
  let maxPoints = Math.max(...arrayOfUserAnswers);
 
  for (let i = 0; i < arrayOfUserAnswers.length; i++) {
    if (arrayOfUserAnswers[i]== maxPoints) {
      categoriesIndex.push(i);
    }
  }
  console.log(categoriesIndex, "Categories");
	let randomIndex = categoriesIndex[Math.floor(Math.random() * categoriesIndex.length)];
  let letter = answerCategory[randomIndex];
  console.log(letter);
  console.log(maxPoints);
  console.log(randomIndex, "RandomIndexNumber");

  
  return (resultCategory = letter);
  
}

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
	let resultbutton = createBtn(
		"SHOW ME MY RESULTS!",
		"#section10",
		"resultbutton"
	);

	div.append(resultbutton);

	//calculate results when btn is clicked
	resultbutton.addEventListener("click", getMovies);
}

// console.log(resultCategory);

// TODO finish this function, find a way to access keys from json to compare
async function getMovies() {
  try {
    getCategory()
		let fetchMovies = await fetch("movie.json");
		let moviesAsJs = await fetchMovies.json();

		let movies = moviesAsJs[resultCategory];
		let arrayOfMovieTitles = Object.keys(movies);

		const randomMovie =
			arrayOfMovieTitles[Math.floor(Math.random() * arrayOfMovieTitles.length)];
		const randomMoviePoster = movies[randomMovie]["poster"];
		const randomMovieYear = movies[randomMovie]["year"];
		console.log(
			movies,
			arrayOfMovieTitles,
			randomMovie,
			randomMoviePoster,
			randomMovieYear
		);
	} catch (error) {
		console.log("error", error);
	}
}
// getMovies();

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
// new