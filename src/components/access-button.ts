import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("access-button")
export default class className extends LitElement {
  static styles = css`
    button {
      background: none;
      border: none;
      font-weight: 700;
    }
    button:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  @property()
  title = "";

  render() {
    return html` <button id="access-button">${this.title}</button> `;
  }
}
