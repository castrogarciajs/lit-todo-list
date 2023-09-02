import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dasboard-view")
export default class DasboardView extends LitElement {
  protected render() {
    return html` <h1>Welcome to dasboard</h1> `;
  }
}
