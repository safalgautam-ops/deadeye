import Navigation from "../components/navigation";
import ContactsSection from "../components/sections/contacts-section";
import SiteShell from "../components/site-shell";

export default function ContactsPage() {
  return (
    <SiteShell>
      <Navigation />
      <ContactsSection />
    </SiteShell>
  );
}
