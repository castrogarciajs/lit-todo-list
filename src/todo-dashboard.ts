import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("todo-dasboard")
export default class TodoDashboard extends LitElement {
  static styles = css`
    .lit-todo-dasboard {
      min-height: 100vh;
      margin: 0 auto;
      padding: 3rem 8rem;
      background-color: #202020;
    }
    @media screen and (max-width: 764px) {
      .lit-todo-dasboard {
        padding: 3rem 6rem;
      }
    }
  `;
  render() {
    return html`
      <div class="lit-todo-dasboard">
        <slot></slot>
      </div>
    `;
  }
}
