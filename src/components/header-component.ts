import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./access-button";

@customElement("header-component")
export default class HeaderComponent extends LitElement {
  @property({ type: Boolean })
  isAuthenticated = false;

  firstUpdated(): void {
    (async () => {
      const user = null;

      if (user) this.isAuthenticated = true;
    })();
  }
  initMenuApplication() {
    return html`
      <access-button
        pathname="/login"
        classname="log-in"
        title="Log In"
        auth="login"
      ></access-button>
      <access-button
        pathname="/register"
        classname="check-in"
        title="Check In"
        auth="register"
      ></access-button>
    `;
  }
  logInitMenuApplication() {
    return html`
      <access-button
        pathname="#"
        classname="check-in"
        title="Log Out"
        auth="logout"
      ></access-button>
    `;
  }
  render() {
    return html`
      <header class="lit-container-header">
        <nav class="lit-container-navbar">
          <div class="lit-container-logo">
            <a href="/">
              <img
                src="/src/assets/lit.svg"
                alt="Web component with Lit"
                width="40"
              />
            </a>
          </div>
          <div slot="drawer">
            ${this.isAuthenticated
              ? this.logInitMenuApplication()
              : this.initMenuApplication()}
          </div>
        </nav>
      </header>
    `;
  }

  static styles = css`
    .lit-container-header {
      background-color: var(--lit-background-white);
      padding: 0.5rem var(--lit-size-padding);
      border-bottom: 1px solid var(--lit-c-line);
      box-shadow: 0px 2px 4px -1px var(--lit-c-shadow);
    }

    .lit-container-navbar,
    .lit-container-logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .lit-container-navbar .lit-container-logo {
      gap: 1rem;
    }
    .lit-container-navbar .lit-container-logo a {
      font-weight: bold;
      font-weight: 600;
    }
  `;
}
