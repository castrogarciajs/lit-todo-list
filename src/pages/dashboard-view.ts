import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { onUserAccessSecurity } from "../firebase/auth";
import { redirect } from "../utils/functions";

@customElement("dasboard-view")
export default class DasboardView extends LitElement {
  protected async firstUpdated() {
    console.log("Mounted DOM");

    try {
      const user = await onUserAccessSecurity();
      if (!user) {
        console.log(true);
        redirect("/");
      } else {
        console.log("Usuario autenticado:", user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  protected render() {
    return html` <h1>Welcome to dasboard</h1> `;
  }
}
