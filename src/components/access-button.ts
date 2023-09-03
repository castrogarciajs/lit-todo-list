import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { logOut } from "../firebase/auth";
import { redirect } from "../utils/functions";

@customElement("access-button")
export default class className extends LitElement {
  @property()
  title = "";

  @property()
  auth = "";

  @property()
  classname = "";

  @property()
  pathname = "";

  handleAccessAuthentication() {
    console.log(this.auth);
    if (this.auth === "logout") {
      this.handlelogOutUser();
      redirect("/");
      return;
    }
  }
  async handlelogOutUser() {
    await logOut();
    console.log("Cerrado de session ✔");
  }
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
    .log-in:hover,
    .check-in:hover {
      background-color: var(--lit-c-line);
      color: var(--lit-c-zinc);
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  `;
}
