import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-element")
export class CustomElement extends LitElement {
  static styles = css`
      
      :host {
        color: #ff0000;
        text-align: center;
      }
  `;

  @property()
  name: string = "LIT";

  render() {
    return html`
      <h1>My first element ${this.name}!</h1>
      <p>Sebastian</p>
    `;
  }
}
