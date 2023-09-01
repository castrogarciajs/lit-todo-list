import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import womenLogIn from "../assets/women-log-in.svg";

@customElement("login-view")
export default class LoginView extends LitElement {
  static styles = css`
    .login-view {
      display: grid;
      grid-template-columns: 50% 50%;
      min-height: 100vh;
      height: 100%;
    }
    .login-view-separator {
      position: relative;
      background: var(--lit-c-water);
    }

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
    .login-view .login-view-form {
      display: grid;
      place-items: center;
    }
    .login-view .login-view-form form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .figure {
      margin: 0;
    }
    .cap-log-in {
      outline: none;
      padding: 0.8rem;
      background: var(--lit-c-line);
      border: none;
      box-shadow: 0 0.2rem 0.9rem 0 var(--lit-c-line);
    }

    .submit-form {
      background-color: var(--lit-c-water);
      border: none;
      width: max-content;
      padding: 0.5rem 1rem;
      color: var(--lit-c-white);
      font-weight: 600;
      cursor: pointer;
    }
    .submit-form:hover {
      background-color: var(--lit-c-water-dark);
    }
  `;
  render() {
    return html`
      <section class="login-view">
        <article class="login-view-separator"></article>
        <article class="login-view-form">
          <form>
            <figure>
              <img src=${womenLogIn} alt="Inicia Sesision" width="150" />
            </figure>
            <input
              type="text"
              placeholder="Ingresa tu correo"
              class="cap-log-in"
            />
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              class="cap-log-in"
            />
            <input type="button" value="Iniciar Sesion" class="submit-form" />
          </form>
        </article>
      </section>
    `;
  }
}
