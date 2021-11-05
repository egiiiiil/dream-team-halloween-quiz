const sectionStart = document.getElementById("section_start");
const bodyTag = document.querySelector("body");

const startButton = document.createElement("button");

function createForm() {
	let label = document.createElement("label");
	let form = document.createElement("form");
	let input = document.createElement("input");

	input.type = "text";
	//DONE Add label
	label.innerHTML = "Add your name:";

	input.placeholder = "First name";
	input.id = "userNameInput";
	form.id = "inputForm";
	startButton.innerHTML = "start the quiz";
	startButton.type = "submit";
	startButton.id = "startButton";

	form.append(label);
	form.append(input);
	form.append(startButton);
	sectionStart.appendChild(form);
}
// Anchor
function createBtn(btnId, btnText, link, btnClass) {
	let anchor = document.createElement("a");
	let button = document.createElement("button");
	anchor.setAttribute("href", link);

	button.id = btnId;
	button.innerHTML = btnText;
	anchor.className = anchorClass;
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

function sectionStartPage() {
	createForm();

	// Create and append submit btn
	// const submitBtn = createBtn(
	// 	"btn__submit",
	// 	"start the quiz",
	// 	"#section_1",
	// 	"btn"
	// );
	// sectionStart.append(submitBtn);
}
sectionStartPage();

export { startButton };

function createSection(id) {
	let section = document.createElement("section");
	//	let answerWrapper = document.createElement("div");
	section.id = id;
	//	answerWrapper.id = id;
	bodyTag.append(section);
	//	section.append(answerWrapper);

	/* 	let div = createDiv(id, "answer_wrapper", appendPlace);
	let button = createBtn(btnId, btnText, link, btnClass);
	bodyTag.append(div);
	bodyTag.append(button); */

	return section;
}
function createContent() {
	let div = createDiv(id, "answer_wrapper", appendPlace);
	let button = createBtn(btnId, btnText, link, btnClass);
}

async function getQuestions() {
	try {
		let fetchQuestions = await fetch("questions.json");
		let questionsAsJson = await fetchQuestions.json();

		for (let i = 0; i <= Object.keys(questionsAsJson).length; i++) {
			createSection("section" + i.toString());
			console.log("questions", Object.keys(questionsAsJson).length);
			console.log("i", i);

		}
	} catch (error) {
		console.log("error", error);
	}
}
getQuestions();
