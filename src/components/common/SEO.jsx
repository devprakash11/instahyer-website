import { useEffect } from "react";
import { seoConfig } from "../../config/seo.config";

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(data) {
  const id = "instahyer-structured-data";
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function SEO({ title = seoConfig.defaultTitle, description = seoConfig.defaultDescription }) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname === "/" ? "/" : window.location.pathname}`;
    const imageUrl = new URL(seoConfig.defaultImage, origin).href;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:site_name", seoConfig.siteName);
    upsertMeta("property", "og:locale", seoConfig.locale);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertLink("canonical", canonicalUrl);

    upsertJsonLd({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: origin,
      description,
    });
  }, [description, title]);

  return null;
}
