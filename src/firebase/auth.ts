import { auth } from "./firebase-app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { errorMessage } from "../utils/error";

const logIn = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  } catch (error) {
    errorMessage(error, "Obtuviste este error");
  }
};

export { logIn };
