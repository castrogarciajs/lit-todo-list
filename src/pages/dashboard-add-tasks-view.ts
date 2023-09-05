import { LitElement, html } from "lit";
import "./dashboard-view";
import { customElement } from "lit/decorators.js";

@customElement("dashboard-add-tasks-view")
export default class DasboardAddTaskView extends LitElement {
  render() {
    return html`
      <dashboard-view>
        <h1>Adding...</h1>
      </dashboard-view>
    `;
  }
}
