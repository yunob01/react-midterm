import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/api/firebaseConfig";

export const getUserInfo = async () => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);
    const userData = userDocSnap.exists() ? userDocSnap.data() : {};

    return {
      uid: user.uid,
      email: user.email,
      username: userData.username || user.displayName || "", 
    };
  }
  return null; 
};

export const login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async ({ username, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    username: username || "",
  });

  await updateProfile(user, {
    displayName: username || "",
  });
};

export const logout = async () => {
  await auth.signOut();
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};
