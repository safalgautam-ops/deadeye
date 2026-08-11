import Navigation from "../components/navigation";
import CertificationsSection from "../components/sections/certifications-section";
import ContactsSection from "../components/sections/contacts-section";
import ProjectsSection from "../components/sections/projects-section";
import SiteShell from "../components/site-shell";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <Navigation />
      <ProjectsSection />
      <CertificationsSection />
      <ContactsSection />
    </SiteShell>
  );
}
