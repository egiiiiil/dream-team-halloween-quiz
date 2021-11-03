const sectionStart = document.getElementById("section_start");
const bodyScript = document.querySelector("body");

const startButton = document.createElement("button");

function createForm() {
	let label = document.createElement("label");
	let form = document.createElement("form");
	let input = document.createElement("input");

	input.type = "text";
	//DONE Add label
	label.innerHTML = "Add your name:"

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


//it's a reusable function to create sections and populate buttons with answers, in order for it to be reusable there needs to be separate button ids and btntext for each answer

//Redo to constructor to be reusable
// function createSectionForQuestionsAndAnswers(questionHeader, answerGridWrapperId, answerGridWrapperClassName, answerGridAppendPlace, btnId1,btnId2, btnId2, btnId3, btnId4,  btnText1, btnText2, btnText3, btnText4,  link1, link2, link3, link4, btnClass) {
// 	console.log("Section1");
// 	let questionText = document.createElement("h1");
// 	questionText.innerHTML = questionHeader;
// 	section1.append(questionText);

// 	let answerGridWrapper = createDiv(answerGridWrapperId, answerGridWrapperClassName, answerGridAppendPlace);
// 	//Redo to btns
// 	const answer1 = createBtn(btnId1, btnClass, answerGridWrapper);
// 	const answer2 = createBtn(btnId2, btnClass, answerGridWrapper);
// 	const answer3 = createBtn(btnId3, btnClass, answerGridWrapper);
// 	const answer4 = createBtn(btnId4, btnClass, answerGridWrapper);
// }
// createSectionForQuestionsAndAnswers();

//creates separate sections when called and adds id

function createSection(id) {
	let section = document.createElement("section");
	section.id = id;
	bodyScript.append(section);
	return section;
}
 
//create unique content for each section
function section1Content(){
	let div = createDiv(id, "answer_wrapper", appendPlace);
	let button = createBtn(btnId, btnText, link, btnClass);
	
}

createSection("section1");
createSection("section2");
createSection("section3");
createSection("section4");
createSection("section5");
createSection("section6");
createSection("section7");
createSection("section8");

