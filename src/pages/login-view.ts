import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import womenLogIn from "../assets/women-log-in.svg";
import { styleSharedViewsLoginRegister } from "./shared-styles/views-shared-styles";
import { logIn } from "../firebase/auth";
import { redirect } from "../utils/functions";

@customElement("login-view")
export default class LoginView extends LitElement {
  @query("#login")
  formElement!: HTMLFormElement;

  @property()
  email!: string;

  @property()
  password!: string;

  private async handleUserLogin(e: Event) {
    e.preventDefault();
    console.log("submit");

    await logIn(this.email, this.password);

    if (this.formElement) this.formElement.reset();

    this.email = "";
    this.password = "";
    redirect("/dashboard");
  }

  private handleEmailUser(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.email = value;
  }

  private handlePasswordUser(e: Event) {
    const { value } = e.target as HTMLInputElement;
    this.password = value;
  }
  protected render() {
    return html`
      <section class="section-view-shared">
        <article
          class="separator-view-separator login-view-separator"
        ></article>
        <article class="view-form">
          <form @submit=${this.handleUserLogin} id="login">
            <figure>
              <img src=${womenLogIn} alt="Inicia Sesision" width="150" />
            </figure>
            <input
              type="text"
              placeholder="Ingresa tu correo"
              class="cap-shared"
              name="email"
              required
              @change=${this.handleEmailUser}
            />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              class="cap-shared"
              name="password"
              required
              @change=${this.handlePasswordUser}
            />
            <input type="submit" value="Iniciar Sesion" class="submit-form" />
          </form>
        </article>
      </section>
    `;
  }
  static styles = [
    styleSharedViewsLoginRegister,
    css`
      .login-view-separator::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: -50px;
        z-index: 1024;
        display: block;
        width: 50px; /* Ancho del separador vertical */
        background-size: 100% 50px;
        background-image: linear-gradient(
            135deg,
            var(--lit-c-water) 25%,
            transparent 25%
          ),
          linear-gradient(44deg, var(--lit-c-water) 25%, transparent 25%);
        background-position: 0 0;
      }
    `,
  ];
}
