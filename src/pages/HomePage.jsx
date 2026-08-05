import React from "react";
import SiteLayout from "../components/layout/SiteLayout";
import HeroSection from "../components/sections/HeroSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import AboutSection from "../components/sections/AboutSection";
import LearningSection from "../components/sections/LearningSection";
import PanelistsSection from "../components/sections/PanelistsSection";
import AgendaSection from "../components/sections/AgendaSection";
import WhyAttendSection from "../components/sections/WhyAttendSection";
import ContestSection from "../components/sections/ContestSection";
import FinalCTASection from "../components/sections/FinalCTASection";

function HomePage() {
  return (
    <SiteLayout>
      {({ openRegistration }) => (
        <>
          <HeroSection onRegister={openRegistration} />
          <BenefitsSection />
          <AboutSection />
          <LearningSection />
          <PanelistsSection />
          <AgendaSection />
          <WhyAttendSection />
          <ContestSection onRegister={openRegistration} />
          <FinalCTASection onRegister={openRegistration} />
        </>
      )}
    </SiteLayout>
  );
}

export default HomePage;
