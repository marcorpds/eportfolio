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
            <time className="timeline-date">
              {item.date.split(' - ').map((datePart, index) => (
                <span key={datePart}>
                  {index > 0 && <span className="timeline-date__dash">-</span>}
                  {datePart}
                </span>
              ))}
            </time>
            <div className="timeline-copy">
              <strong>{item.type}</strong>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
              <p className="timeline-description">{item.description}</p>
              <TagList tags={item.tags} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
