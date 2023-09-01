import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("access-button")
export default class className extends LitElement {
  static styles = css`
    a {
      color: white;
      font-weight: 700;
      text-decoration: none;
      padding: 0 1.2rem;
    }
    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    a {
      color: var(--lit-c-indigo);
    }
    .log-in:hover, .check-in:hover {
      
      background-color: var(--lit-c-line);
      color: var(--lit-c-zinc);
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
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
