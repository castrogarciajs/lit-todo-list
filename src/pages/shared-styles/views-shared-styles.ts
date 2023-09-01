import { css } from "lit";

export const styleSharedViewsLoginRegister = css`
  figure {
    margin: 0;
  }
  .section-view-shared {
    display: grid;
    grid-template-columns: 50% 50%;
    min-height: 100vh;
    height: 100%;
  }
  .section-view-shared .view-form {
    display: grid;
    place-items: center;
  }
  .section-view-shared .view-form form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .separator-view-separator {
    position: relative;
    background: var(--lit-c-water);
  }
  .cap-shared {
    outline: none;
    padding: 0.8rem;
    background: var(--lit-c-line);
    border: none;
    box-shadow: 0 0.2rem 0.9rem 0 var(--lit-c-line);
  }

  .submit-form {
    background-color: var(--lit-c-water);
    border: none;
    width: max-content;
    padding: 0.5rem 1rem;
    color: var(--lit-c-white);
    font-weight: 600;
    cursor: pointer;
  }
  .submit-form:hover {
    background-color: var(--lit-c-water-dark);
  }
`;
