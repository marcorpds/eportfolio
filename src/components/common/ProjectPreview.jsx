import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import ProjectImage from './ProjectImage.jsx';
import TagList from './TagList.jsx';

export default function ProjectPreview({ item, compact = false }) {
  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      <ProjectImage alt={item.title} src={item.image} />
      <div className="project-card__body">
        <span className="year">{item.year}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <TagList tags={item.tags} />
        <a className="view-link project-card__link" href="#contact" aria-label={`View ${item.title}`}>
          <span>View</span>
          <FaArrowUpRightFromSquare aria-hidden="true" size={13} />
        </a>
      </div>
    </article>
  );
}
