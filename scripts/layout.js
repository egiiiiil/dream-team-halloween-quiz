const sectionStart = document.getElementById("section_start");
const section2 = document.getElementById("section_2");

function createForm() {
  let form = document.createElement("form");
  let input = document.createElement("input");
  input.type = "text";
  input.value = "First name";
  input.id = "form";
  form.append(input);
  sectionStart.appendChild(input);
}

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
    "#section_2",
    "btn"
  );
  sectionStart.append(submitBtn);
}
sectionStartPage();

function section2Container() {
  console.log("Section2");
  let text = document.createElement("h1");
  text.innerHTML = "question";
  section2.append(text);

  let divGridWrapper = createDiv("answer_wrapper", "wrapper", section2);

  const answer1 = createDiv("option1", "answers", divGridWrapper);
  const answer2 = createDiv("option2", "answers", divGridWrapper);
  const answer3 = createDiv("option3", "answers", divGridWrapper);
  const answer4 = createDiv("option4", "answers", divGridWrapper);
}
section2Container();
