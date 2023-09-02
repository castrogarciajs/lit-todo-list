import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import womenLogIn from "../assets/women-log-in.svg";
import { styleSharedViewsLoginRegister } from "./shared-styles/views-shared-styles";

@customElement("login-view")
export default class LoginView extends LitElement {
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

  protected render() {
    return html`
      <section class="section-view-shared">
        <article
          class="separator-view-separator login-view-separator"
        ></article>
        <article class="view-form">
          <form>
            <figure>
              <img src=${womenLogIn} alt="Inicia Sesision" width="150" />
            </figure>
            <input
              type="text"
              placeholder="Ingresa tu correo"
              class="cap-shared"
            />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              class="cap-shared"
            />
            <input type="button" value="Iniciar Sesion" class="submit-form" />
          </form>
        </article>
      </section>
    `;
  }
}
