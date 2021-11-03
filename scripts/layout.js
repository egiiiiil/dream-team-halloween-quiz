const sectionStart = document.getElementById("section_start");
const section1 = document.getElementById("section_1");

function createForm() {
	let form = document.createElement("form");
	let input = document.createElement("input");
	input.type = "text";
	//Add label
	input.value = "First name";
	input.id = "form";
	form.append(input);
	sectionStart.appendChild(input);
}
//Anchor
function createBtn(btnId, btnText, link, btnClass) {
	let btn = document.createElement("a");
	btn.setAttribute("href", link);
	btn.id = btnId;
	btn.innerHTML = btnText;
	btn.className = btnClass;

	return btn;
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
	const submitBtn = createBtn(
		"btn__submit",
		"start the quiz",
		"#section_1",
		"btn"
	);
	sectionStart.append(submitBtn);
}
sectionStartPage();

//Redo to constructor to be reusable 
function createSectionForQuestionsAndAnswers() {
	console.log("Section1");
	let questionText = document.createElement("h1");
	questionText.innerHTML = "question";
	section1.append(questionText);

	let answerGridWrapper = createDiv("answer_wrapper", "wrapper", section1);
	//Redo to btns
	const answer1 = createDiv("option1", "answers", answerGridWrapper);
	const answer2 = createDiv("option2", "answers", answerGridWrapper);
	const answer3 = createDiv("option3", "answers", answerGridWrapper);
	const answer4 = createDiv("option4", "answers", answerGridWrapper);
}
createSectionForQuestionsAndAnswers() 