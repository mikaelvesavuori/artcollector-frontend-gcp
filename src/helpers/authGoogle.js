import * as firebase from 'firebase';
import 'firebase/auth';
import { firebaseConfig } from '../configuration';

const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export async function authGoogle() {
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then(result => {
			const TOKEN = result.credential.accessToken;
			const USER = result.user;
			const EMAIL = result.user.email;
			return EMAIL;
		})
		.catch(error => {
			const ERROR_CODE = error.code;
			const ERROR_MESSAGE = error.message;
			const EMAIL = error.email;
			const CREDENTIAL = error.credential;
		});
}
