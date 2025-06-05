import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/api/firebaseConfig";


export const getUserInfo = async () => {
  const user = auth.currentUser;
  if (user) {
    return {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
    };
  }
  return null; // 沒有登入
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
  const user = userCredential?.user;
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    username: username || "",
  });
};

export const logout = async () => {
  await auth.signOut();
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};