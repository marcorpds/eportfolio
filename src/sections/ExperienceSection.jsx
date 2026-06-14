import TagList from '../components/common/TagList.jsx';
import { experience } from '../data/portfolioData.js';

export default function ExperienceSection() {
  return (
    <section className="experience-panel" id="experience" aria-labelledby="experience-title">
      <h2 className="eyebrow" id="experience-title">Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <a className="timeline-card" href={item.link} key={`${item.date}-${item.title}`} aria-label={`Open ${item.title}`}>
            <span className="timeline-pin" />
            <time>{item.date}</time>
            <div>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
              <TagList tags={item.tags} />
            </div>
            <div className="timeline-actions">
              <strong>{item.type}</strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
