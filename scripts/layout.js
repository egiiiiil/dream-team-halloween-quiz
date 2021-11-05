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
	//===============NEW
	div.addEventListener("click", function (event) {
		if (event.target.tagName === "BUTTON") {
			console.log("class is", event.target.classList[0]);
		}
	});

	const buttonAnswerClass = ["a", "b", "c", "d"];
	//===============END NEW
	// Buttons
	for (let i = 0; i < QnA.answers.length; i++) {
		let button = createBtn(
			section.id + "button", // this creates not unique IDs for buttons, so now all buttons in one section have the same IDs
			QnA.answers[i],
			"#section" + (section_id + 1).toString(),
			// "answers"
			`${buttonAnswerClass[i]} answers`
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
	} catch (error) {
		console.log("error", error);
	}
}
getQuestions();
