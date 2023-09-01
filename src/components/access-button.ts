import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("access-button")
export default class className extends LitElement {
  static styles = css`
    a {
      color: white;
      font-weight: 700;

    }
    a:hover {
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

  @property()
  pathname = "";
  render() {
    return html`
      <a
        href=${this.pathname}
        class=${this.classname}
        @click=${this.handleAccessAuthentication}
      >
        ${this.title}
      </a>
    `;
  }

  handleAccessAuthentication() {
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
