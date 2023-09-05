import { LitElement, html } from "lit";
import "./dashboard-view";
import { customElement } from "lit/decorators.js";

@customElement("dashboard-tasks-view")
export default class DasboardTasksView extends LitElement {
  render() {
    return html`
      <dashboard-view>
        <h1>Tareas</h1>
      </dashboard-view>
    `;
  }
}
