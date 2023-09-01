import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("login-view")
export default class LoginView extends LitElement {
  render() {
    return html`
      <h1>login view</h1>
      <p>login view</p>
    `;
  }
}
