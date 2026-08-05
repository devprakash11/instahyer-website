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

      <main>
        {typeof children === "function"
          ? children({ openRegistration })
          : children}
      </main>

      <Footer />

      <RegistrationModal
        open={registrationOpen}
        onClose={closeRegistration}
      />
    </>
  );
}

export default SiteLayout;