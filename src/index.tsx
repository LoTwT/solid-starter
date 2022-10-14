/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import routes from "~solid-pages";

import "@unocss/reset/tailwind.css";
import "@/styles/index.css";
import "uno.css";

const Routes = useRoutes(routes);

render(
  () => (
    <Router>
      <Routes />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
