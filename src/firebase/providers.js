import { 
	createUserWithEmailAndPassword, 
	GoogleAuthProvider, 
	signInWithEmailAndPassword, 
	signInWithPopup, 
	updateProfile } from "firebase/auth";
	
import { FirebaseAuth } from "./config";


export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

  try {

    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password);
    
    const { uid, photoURL } = resp.user;

    await updateProfile( FirebaseAuth.currentUser, {
      displayName: displayName
    })

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {

    console.log(error);

    return {
      ok: false,
      errorMessage: error.code
    }
  }
}

export const signInWithGoogle = async () => {

  try {

		const googleProvider = new GoogleAuthProvider();

    const result = await signInWithPopup( FirebaseAuth, googleProvider );

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, 
      email, 
      photoURL, 
      uid
    }


  } catch (error) {

    console.log(error);

    return {
      ok: false,
      errorMessage: error.errorMessage
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {

  const emailAddress = email;

  try {
    
    const result = await signInWithEmailAndPassword( FirebaseAuth, emailAddress, password );

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, 
      email, 
      photoURL, 
      uid
    }

  } catch (error) {

    return {
      ok: false,
      errorMessage: error.code
    }
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}