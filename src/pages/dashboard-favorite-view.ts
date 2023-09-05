import { LitElement, html } from "lit";
import "./dashboard-view";
import { customElement } from "lit/decorators.js";

@customElement("dashboard-favorite-view")
export default class DasboardFavoriteView extends LitElement {
  render() {
    return html`
      <dashboard-view>
        <h1>Favorite</h1>
      </dashboard-view>
    `;
  }
}
