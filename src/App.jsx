import React from "react";
import { resolveRoute } from "./config/routes";

function App() {
  const route = resolveRoute(window.location.pathname);
  const Page = route.element;

  return <Page />;
}

export default App;
