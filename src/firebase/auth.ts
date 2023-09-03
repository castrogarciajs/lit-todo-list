import { auth } from "./firebase-app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { errorMessage } from "../utils/error";

const checkIn = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    console.log("Register Successfuly ✔");
  } catch (error) {
    errorMessage(error, "Obtuviste este error de registro");
  }
};

const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential.user);
    console.log("Login Sucessfuly ✔");
  } catch (error) {
    console.log({ error });
    errorMessage(error, "Obtuviste un error de inicio de sesion");
  }
};

const onUserAccessSecurity = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  });
};

const logOut = async () => {
  await signOut(auth);
};
export { checkIn, logIn, onUserAccessSecurity, logOut };
