import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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
async function addName() {
	var name = readInput("name");
	var age = readInput("age");
	if (!name) return null;
	try {
		const docRef = await addDoc(collection(db, "names"), {
			name: name,
			age: age,
		});
		clearInput("name");
		clearInput("age");
		displayNamesInList("listOfNames");
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}
