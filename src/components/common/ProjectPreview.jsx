import ProjectImage from './ProjectImage.jsx';
import TagList from './TagList.jsx';

export default function ProjectPreview({ item, compact = false }) {
  const href = item.link ?? '#contact';

  return (
    <a className={`project-card ${compact ? 'project-card--compact' : ''}`} href={href} aria-label={`Open ${item.title}`}>
      <ProjectImage alt={item.title} src={item.image} />
      <div className="project-card__body">
        <span className="year">{item.year}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <TagList tags={item.tags} />
      </div>
    </a>
  );
}
