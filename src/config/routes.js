import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

/**
 * Central route registry for the public Instahyer website.
 * Keep route definitions here so App.jsx remains responsible only for
 * resolving the current pathname and rendering the matching page.
 */
export const routes = [
  {
    path: "/",
    element: HomePage,
    title: "Instahyer | People & Culture Leadership Webinar",
  },
];

export const notFoundRoute = {
  path: "*",
  element: NotFoundPage,
  title: "Page Not Found | Instahyer",
};

export function normalizePathname(pathname = window.location.pathname) {
  const path = pathname.trim() || "/";

  if (path === "/") {
    return "/";
  }

  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function resolveRoute(pathname = window.location.pathname) {
  const path = normalizePathname(pathname);
  return routes.find((route) => route.path === path) ?? notFoundRoute;
}
