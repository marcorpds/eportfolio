import TagList from '../components/common/TagList.jsx';
import ViewLink from '../components/common/ViewLink.jsx';
import { experience } from '../data/portfolioData.js';

export default function ExperienceSection() {
  return (
    <section className="experience-panel" id="experience" aria-labelledby="experience-title">
      <p className="eyebrow">Experience</p>
      <h2 id="experience-title">Current Path</h2>
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.date}-${item.title}`}>
            <span className="timeline-pin" />
            <time>{item.date}</time>
            <div>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
              <TagList tags={item.tags} />
            </div>
            <div className="timeline-actions">
              <strong>{item.type}</strong>
              <ViewLink href={item.link} label={`View ${item.title}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
