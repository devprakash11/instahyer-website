import React from "react";
import SEO from "./components/common/SEO";
import { resolveRoute } from "./config/routes";

function App() {
  const route = resolveRoute(window.location.pathname);
  const Page = route.element;

  return (
    <>
      <SEO title={route.title} />
      <Page />
    </>
  );
}

export default App;
