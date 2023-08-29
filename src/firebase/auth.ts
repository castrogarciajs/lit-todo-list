import { auth } from "./firebase-app";
import { createUserWithEmailAndPassword } from "firebase/auth";

const logIn = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  } catch (error) {
    console.log({ error });
  }
};

export { logIn };
