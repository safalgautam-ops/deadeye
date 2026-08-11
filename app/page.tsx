import AchievementsSection from "./components/sections/achievements-section";
import CertificationsSection from "./components/sections/certifications-section";
import ContactsSection from "./components/sections/contacts-section";
import EventsSection from "./components/sections/events-section";
import HeroSection from "./components/sections/hero-section";
import PlatformsStatsSection from "./components/sections/platforms-stats-section";
import ProjectsSection from "./components/sections/projects-section";
import ScheduleSection from "./components/sections/schedule-section";
import Navigation from "./components/navigation";
import SiteShell from "./components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <Navigation />
      <ScheduleSection />
      <AchievementsSection />
      <EventsSection />
      <ProjectsSection />
      <CertificationsSection />
      <PlatformsStatsSection />
      <ContactsSection />
    </SiteShell>
  );
}
