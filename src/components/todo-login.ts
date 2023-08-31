import { LitElement, html} from "lit";
import { customElement } from "lit/decorators.js";

@customElement("todo-login")
export default class TodoLogin extends LitElement {
  render() {
    return html`
      <form>
        <input type="text" placeholder="Ingresa tu correo" />
      </form>
    `;
  }
}
