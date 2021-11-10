import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
// import "./layout.js";

import {startButton} from "./layout.js";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAoGPPPfrNdpkbPM_0yWp_JHnDgCqgZDrg",
	authDomain: "dream-team-halloween-quiz.firebaseapp.com",
	projectId: "dream-team-halloween-quiz",
	storageBucket: "dream-team-halloween-quiz.appspot.com",
	messagingSenderId: "8737103481",
	appId: "1:8737103481:web:16c5701b90a1c78bd7fea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Add to firebase
async function addNameToFirebase() {
	var userName = readInput("userNameInput");
	if (!userName) return null;
	try {
		const docRef = await addDoc(collection(db, "user-names"), {
			name: userName,
		});
		// clearInput("userNameInput");
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

function readInput(id) {
	if (!document.getElementById(id) && !document.getElementById(id).value)
		return null;
	// console.log(document.getElementById(id).value);
	return document.getElementById(id).value;
}


function sendNameToFirebase(event){
	if(!document.getElementById("startButton")) return null;
	//   document.getElementById("startButton").removeEventListener("click", addNameToFirebase);
	 event.preventDefault();
// 	document.getElementById("startButton").addEventListener("click", addNameToFirebase);
    console.log("clicked");
	addNameToFirebase();
	document.getElementById("inputForm").reset();
	window.location.href = "#section1";
	

	//onclick="window.location.href='/page2'"
};
startButton.addEventListener("click", sendNameToFirebase);


let resultButton = document.getElementsByClassName('resultbutton')[0];
console.log(resultButton)

/* async function sendNameAndMovieToFirebase() {
	if(!resultButton) return null;
	console.log("clicked");
	addNameToFirebase();
	window.location.href = "#section10";
	
};

resultButton.addEventListener("click", sendNameAndMovieToFirebase); */