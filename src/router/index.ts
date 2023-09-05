import { Route } from "@vaadin/router";
import "../pages/home-view";
import "../pages/login-view";
import "../pages/register-view";
import "../pages/dashboard-view";
import "../pages/dashboard-tasks-view";
import "../pages/dashboard-favorite-view";
import "../pages/dashboard-add-tasks-view";

export const views: Route[] = [
  { path: "/", component: "home-view" },
  { path: "/login", component: "login-view" },
  { path: "/register", component: "register-view" },
  { path: "/dashboard", component: "dashboard-view", redirect: "/tasks" },
  { path: "/tasks", component: "dashboard-tasks-view" },
  { path: "/add-task", component: "dashboard-add-tasks-view" },
  { path: "/favorite", component: "dashboard-favorite-view" },
];
