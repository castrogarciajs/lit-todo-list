import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-view")
export default class HomeView extends LitElement {
  render() {
    return html`
      <h1>Home view</h1>
      <p>Home view</p>
    `;
  }
}
