import SideNav from './components/layout/SideNav.jsx';
import SocialRail from './components/layout/SocialRail.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ArchiveSection from './sections/ArchiveSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import PageNotFound from './sections/PageNotFound.jsx';
import { certificates, projects } from './data/portfolioData.js';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function isPortfolioPath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  return path === basePath || path === `${basePath}/index.html`;
}

export default function App() {
  if (!isPortfolioPath()) {
    return <PageNotFound />;
  }

  return (
    <div className="portfolio-shell">
      <SideNav />
      <main className="content-frame">
        <AboutSection />
        <ArchiveSection id="projects" eyebrow="All Projects" title="Projects" items={projects} />
        <ArchiveSection id="certificates" eyebrow="All Certificates" title="Certificates" items={certificates} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SocialRail />
    </div>
  );
}
