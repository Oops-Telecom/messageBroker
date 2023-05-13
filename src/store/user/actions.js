import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "boot/firebase";
import { Notify } from "quasar";

export async function register(context, credentials) {
  const auth = getAuth(app);
  const { email, password } = credentials;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    Notify.create({
      icon: "check",
      color: "positive",
      message: "Usuário registrado com êxito!",
      position: "top-right",
    });
    return true;
  } catch (error) {
    Notify.create({
      icon: "warning",
      color: "negative",
      message: "Erro ao registrar usuário!",
      position: "top-right",
    });
  }

  return false;
}

export async function login(context, credentials) {
  const auth = getAuth(app);
  const { email, password } = credentials;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    Notify.create({
      icon: "check",
      color: "positive",
      message: "Login realizado com êxito!",
      position: "top-right",
    });
    return true;
  } catch (error) {
    Notify.create({
      icon: "warning",
      color: "negative",
      message: "Erro ao realizar login!",
      position: "top-right",
    });
  }

  return false;
}

export async function logout() {
  const auth = getAuth(app);

  try {
    await signOut(auth);
    Notify.create({
      icon: "check",
      color: "positive",
      message: "Desconectado com êxito!",
      position: "top-right",
    });
    return true;
  } catch (error) {
    Notify.create({
      icon: "warning",
      color: "positive",
      message: "Erro ao fazer logout",
      position: "top-right",
    });
  }

  return false;
}
