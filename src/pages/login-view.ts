import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("login-view")
export default class LoginView extends LitElement {
  render() {
    return html`
      <section>
        <form>
          <input type="text" placeholder="Ingresa tu correo" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <input type="button" value="Iniciar Sesion" />
        </form>
      </section>
    `;
  }
}
