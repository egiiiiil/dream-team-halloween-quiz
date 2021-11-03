import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from "firebase/firestore/lite";
// import "./layout.js";

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
	console.log(document.getElementById(id).value);
	return document.getElementById(id).value;
}
