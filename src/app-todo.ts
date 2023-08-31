import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/todo-login";

@customElement("app-todo")
export default class AppTodo extends LitElement {
  static styles = css`
    :host {
      color: #00ff00;
    }
  `;
  render() {
    return html`
      <h1>Wlecome Lit Todo List</h1>
      <todo-login></todo-login>  
    `;
  }
}
