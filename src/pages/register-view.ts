import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import womenRegister from "../assets/wome-register.svg";
import { styleSharedViewsLoginRegister } from "./shared-styles/views-shared-styles";

@customElement("register-view")
export default class RegiserView extends LitElement {
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
  protected render() {
    return html`
      <section class="section-view-shared">
        <article class="view-form">
          <form>
            <figure>
              <img src=${womenRegister} alt="Inicia Sesision" width="150" />
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
            <input type="button" value="Registrarse" class="submit-form" />
          </form>
        </article>
        <article
          class="separator-view-separator register-view-separator"
        ></article>
      </section>
    `;
  }
}
