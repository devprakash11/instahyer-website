import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationModal from "../modal/RegistrationModal";

function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  const openRegistration = () => {
    setRegistrationOpen(true);
    setMenuOpen(false);
  };

  const closeRegistration = () => {
    setRegistrationOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div aria-hidden={registrationOpen}>
        <Header
          menuOpen={menuOpen}
          onToggleMenu={() => {
            setMenuOpen((current) => !current);
          }}
          onCloseMenu={() => {
            setMenuOpen(false);
          }}
          onRegister={openRegistration}
        />

        <main id="main-content" tabIndex="-1">
          {typeof children === "function"
            ? children({ openRegistration })
            : children}
        </main>

        <Footer />
      </div>

      <RegistrationModal
        open={registrationOpen}
        onClose={closeRegistration}
      />
    </>
  );
}

export default SiteLayout;
