import { initializeApp } from "firebase/app";
import {
	APP_ID,
	AUTH_DOMAIN,
	FIRBASE_API_KEY,
	MESSAGING_SENDER_ID,
	PROJECT_ID,
	STORAGE_BUCKET,
} from "../constants/Firebase";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
	apiKey: FIRBASE_API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const signup = async (
	fullname: string,
	email: string,
	password: string
) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = response.user;
		await addDoc(collection(db, "user"), {
			uid: user.uid,
			fullname,
			authProvider: "local",
			email,
		});
	} catch (error) {
		console.error(error);
		toast.error(error?.code?.split("/")[1]?.split("-")?.join(" "));
	}
};

export const login = async (email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		toast.error(error?.code?.split("/")[1]?.split("-")?.join(" "));
	}
};

export const logout = () => {
	signOut(auth);
};
