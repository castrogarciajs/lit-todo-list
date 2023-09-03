import { Router } from "@vaadin/router";
import { views } from "./router/index";
import "./firebase/firebase-app";
import "./components/header-component";

const router = new Router(document.querySelector("#router-outlet"));

router.setRoutes(views);
