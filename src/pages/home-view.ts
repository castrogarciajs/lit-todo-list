import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import litTodo from "../assets/lit.svg";

@customElement("home-view")
export default class HomeView extends LitElement {
  static styles = css`
    .home-view {
      display: grid;
      grid-template-columns: 50% 50%;
      min-height: 100vh;
      height: 100%;
      overflow: hidden;
    }
    .home-view .home-title {
      padding-left: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .home-view .home-title h1 {
      font-size: 9rem;
    }
    .home-view .home-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .home-view .home-image img {
      object-fit: cover;
      animation: floatLitImage 2.5s infinite;
    }

    @keyframes floatLitImage {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-12px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  render() {
    return html`
      <section class="home-view">
        <article class="home-title">
          <h1>Bienvenido a Todo Lit</h1>
        </article>
        <article class="home-image">
          <img src=${litTodo} alt="Todo Lit" width="450" />
        </article>
      </section>
    `;
  }
}
