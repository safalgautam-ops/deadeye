import Navigation from "../components/navigation";
import CertificationsSection from "../components/sections/certifications-section";
import EventsSection from "../components/sections/events-section";
import ProjectsSection from "../components/sections/projects-section";
import ContactsSection from "../components/sections/contacts-section";
import SiteShell from "../components/site-shell";

export default function EventsPage() {
  return (
    <SiteShell>
      <Navigation />
      <EventsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactsSection />
    </SiteShell>
  );
}
