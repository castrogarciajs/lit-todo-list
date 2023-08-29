import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/custom-element";

@customElement("app-todo")
export default class AppTodo extends LitElement {
  static styles = css`
    :host {
      color: #00ff00;
    }
  `;
  render() {
    return html`
      <h1>App principal</h1>
      <custom-element></custom-element>
    `;
  }
}
