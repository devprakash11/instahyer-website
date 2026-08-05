import React from "react";
function NotFoundPage() {
  return (
    <main className="not-found">
      <p>404</p>
      <h1>Page not found</h1>
      <span>The page you requested does not exist.</span>
      <a className="button button--primary" href="/">Return home</a>
    </main>
  );
}

export default NotFoundPage;
