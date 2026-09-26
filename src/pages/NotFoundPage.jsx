import React from "react";

function NotFoundPage() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <p aria-hidden="true">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <span>The page you requested does not exist.</span>
      <a className="button button--primary" href="/">
        Return home
      </a>
    </main>
  );
}

export default NotFoundPage;
