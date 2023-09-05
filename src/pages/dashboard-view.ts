import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { onUserAccessSecurity } from "../firebase/auth";
import { redirect } from "../utils/functions";
import "@vaadin/icons";
import "@vaadin/icon/theme/material/vaadin-icon";

@customElement("dashboard-view")
export default class DasboardView extends LitElement {
  @property({ type: Array })
  dashboardListMenu = [
    { title: "Tasks", icon: "tasks", redirect: "/tasks" },
    { title: "Favorite", icon: "bookmark", redirect: "/favorite" },
    { title: "Finished", icon: "check", redirect: "#" },
    { title: "Earrings", icon: "fire", redirect: "/earrings" },
    { title: "Email", icon: "at", redirect: "mailto:johancs.mm@gmail.com" },
    {
      title: "Github",
      icon: "flask",
      redirect: "https://github.com/sebastian009w",
    },
    { title: "Add Task", icon: "hash", redirect: "/add-task" },
  ];
  protected async firstUpdated() {
    console.log("Mounted DOM");

    try {
      const user = await onUserAccessSecurity();
      if (!user) {
        console.log(true);
        redirect("/");
      } else {
        console.log("Usuario autenticado:", user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  protected render() {
    return html`
      <section class="section-dashboard">
        <nav class="navbar-dashboard">
          <ul>
            ${this.dashboardListMenu.map(
              (elementMenu) => html`
                <li>
                  <vaadin-icon icon="vaadin:${elementMenu.icon}"></vaadin-icon>
                  <a href=${elementMenu.redirect}> ${elementMenu.title} </a>
                </li>
              `
            )}
          </ul>
        </nav>
        <article class="dashboard-view">
          <slot></slot>
        </article>
        <aside></aside>
      </section>
    `;
  }

  static styles = css`
    .section-dashboard {
      background-color: var(--lit-c-dash);
      display: grid;
      grid-template-columns: 15% 70% 15%;
      min-height: 100vh;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .section-dashboard .navbar-dashboard {
      height: 100%;
    }
    .section-dashboard .navbar-dashboard ul {
      /* padding: 3rem 0 0 3rem; */
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .section-dashboard .navbar-dashboard ul li {
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }
    .section-dashboard .navbar-dashboard ul li a {
      text-decoration: none;
      color: var(--lit-c-color);
      font-weight: bold;
    }
    .section-dashboard .navbar-dashboard ul li:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .section-dashboard .dashboard-view {
      background-color: var(--lit-c-white);
      box-shadow: 1px 4px 1rem 0 rgba(0, 0, 0, 0.2);
    }
    .section-dashboard .dashboard-view {
      padding: 1rem;
    }
    @media screen and (max-width: 763px) {
      .section-dashboard {
        padding-top: 1rem;
        grid-template-columns: auto;
        padding-bottom: 1rem;
      }
    }
  `;
}
