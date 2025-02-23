import "./js/registration";
import "./js/login";
import { refs } from "./js/refs";

const token = localStorage.getItem(refs.LS_KEY);

if (token) {
  location.replace("/contacts.html");
}
