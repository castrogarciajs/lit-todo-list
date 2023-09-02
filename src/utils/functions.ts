import { Router } from "@vaadin/router";

function redirect(pathname: string) {
  Router.go(pathname);
}

export { redirect };
