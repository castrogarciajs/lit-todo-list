import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("access-button")
export default class className extends LitElement {
  static styles = css`
    button {
      background: none;
      border: none;
      font-weight: 700;
    }
    button:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .log-in {
      background-color: #202020;
    }
    .check-in {
      background-color: #202020;
    }
  `;

  @property()
  title = "";

  @property()
  auth = "";

  @property()
  classname = "";
  render() {
    return html`
      <button class=${this.classname} @click=${this.handleAccessAuthentication}>
        ${this.title}
      </button>
    `;
  }

  handleAccessAuthentication() {
    alert("event");
    console.log(this.auth);
    if (this.auth === "login") {
      console.log("Iniciar sesion");
      return;
    } else if (this.auth === "register") {
      console.log("Registrarse");
      return;
    }
  }
}
