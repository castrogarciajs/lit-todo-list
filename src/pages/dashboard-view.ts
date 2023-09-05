import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { onUserAccessSecurity } from "../firebase/auth";
import { redirect } from "../utils/functions";
import "@vaadin/icons";
import "@vaadin/icon/theme/material/vaadin-icon";

@customElement("dashboard-view")
export default class DasboardView extends LitElement {
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
            <li>
              <vaadin-icon icon="vaadin:user"></vaadin-icon>
              <a href="/dashboard"> Home </a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:tasks"></vaadin-icon>
              <a href="/tasks"> Tasks </a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:bookmark"></vaadin-icon>
              <a href="#">Favorite</a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:check"></vaadin-icon>
              <a href="#">Finished</a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:fire"></vaadin-icon>
              <a href="#">Pending</a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:at"></vaadin-icon>
              <a href="mailto:johancs.mm@gmail.com">Email</a>
            </li>
            <li>
              <vaadin-icon icon="vaadin:flask"></vaadin-icon>
              <a href="https://github.com/sebastian009w" target="_blank"
                >Github</a
              >
            </li>
          </ul>
        </nav>
        <article>
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
    .section-dashboard article {
      background-color: var(--lit-c-white);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
