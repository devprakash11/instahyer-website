import React from "react";
import SEO from "./components/common/SEO";
import { resolveRoute } from "./config/routes";

function App() {
  const route = resolveRoute(window.location.pathname);
  const Page = route.element;
  const isIndexableRoute = route.path !== "*";

  return (
    <>
      <SEO title={route.title} index={isIndexableRoute} />
      <Page />
    </>
  );
}

export default App;
