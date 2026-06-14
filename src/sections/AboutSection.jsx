import ProjectPreview from '../components/common/ProjectPreview.jsx';
import ServiceCard from '../components/common/ServiceCard.jsx';
import SkillTicker from '../components/common/SkillTicker.jsx';
import { projects, services, skills } from '../data/portfolioData.js';

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function AboutSection() {
  return (
    <section className="about-panel" id="about" aria-labelledby="about-title">
      <h3>Hello, I'm</h3>
      <h1 id="about-title">Marco Pereira da Silva</h1>
      <h2>BSc Computer Science Student</h2>
      <p className="intro">
        I enjoy turning ideas into useful solutions through code, data and design.
        I'm passionate about building efficient, reliable software and working
        on projects that create a real impact.
      </p>

      <div className="section-divider" />
      <h3>Skills</h3>
      <SkillTicker skills={skills} />

      <div className="section-divider" />
      <h3>What I Do</h3>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>

      <div className="section-divider" />
      <h3>Featured Projects</h3>
      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <ProjectPreview item={project} compact key={project.title} />
        ))}
      </div>
    </section>
  );
}
