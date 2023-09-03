import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import womenRegister from "../assets/wome-register.svg";
import { styleSharedViewsLoginRegister } from "./shared-styles/views-shared-styles";
import { checkIn } from "../firebase/auth";
import { redirect } from "../utils/functions";

@customElement("register-view")
export default class RegiserView extends LitElement {
  @query("#register")
  formElement!: HTMLFormElement | null;

  @property()
  email!: string;

  @property()
  password!: string;

  private async userRegistryHandle(e: Event) {
    e.preventDefault();

    await checkIn(this.email, this.password);
    if (this.formElement) this.formElement.reset();

    this.email = "";
    this.password = "";

    redirect("/dashboard");
  }

  private handleEmailChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;

    this.email = inputElement.value;
  }
  private handlePasswordChange(e: Event) {
    const inputElement = e.target as HTMLInputElement;

    this.password = inputElement.value;
  }
  protected render() {
    return html`
      <section class="section-view-shared">
        <article class="view-form">
          <form @submit=${this.userRegistryHandle} id="register">
            <figure>
              <img src=${womenRegister} alt="Inicia Sesision" width="150" />
            </figure>
            <input
              type="text"
              placeholder="Ingresa tu correo"
              class="cap-shared"
              name="useremail"
              value=${this.email}
              @change=${this.handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              class="cap-shared"
              name="password"
              value=${this.password}
              @change=${this.handlePasswordChange}
              required
            />
            <input type="submit" value="Registrarse" class="submit-form" />
          </form>
        </article>
        <article
          class="separator-view-separator register-view-separator"
        ></article>
      </section>
    `;
  }
  static styles = [
    styleSharedViewsLoginRegister,
    css`
      .register-view-separator::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -50px;
        z-index: 1024;
        display: block;
        width: 50px; /* Ancho del separador vertical */
        background-size: 100% 50px;
        background-image: linear-gradient(
            315deg,
            var(--lit-c-water) 25%,
            transparent 25%
          ),
          linear-gradient(225deg, var(--lit-c-water) 25%, transparent 25%);
        background-position: 0 0;
      }
    `,
  ];
}
