import CertificationsSection from "./components/sections/certifications-section";
import CommunitySection from "./components/sections/community-section";
import ContactSection from "./components/sections/contact-section";
import HeroSection from "./components/sections/hero-section";
import OperationsSection from "./components/sections/operations-section";
import PlatformsSection from "./components/sections/platforms-section";
import ProjectsSection from "./components/sections/projects-section";
import RoutineSection from "./components/sections/routine-section";
import SiteShell from "./components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <OperationsSection />
      <ProjectsSection />
      <CertificationsSection />
      <PlatformsSection />
      <RoutineSection />
      <CommunitySection />
      <ContactSection />
    </SiteShell>
  );
}
