import { FaArrowUpRightFromSquare, FaFileLines, FaGithub, FaDownload, FaYoutube } from 'react-icons/fa6';
import ProjectImage from './ProjectImage.jsx';
import TagList from './TagList.jsx';

const linkIcons = {
  files: FaFileLines,
  github: FaGithub,
  document: FaFileLines,
  link: FaArrowUpRightFromSquare,
  download: FaDownload,
  youtube: FaYoutube,
};

export default function ProjectPreview({ item, compact = false }) {
  const secondaryLinks = item.links ?? [];

  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      <a className="project-card__primary-link" href={item.link} aria-label={`Open ${item.title}`} />
      <ProjectImage alt={item.title} src={item.image} />
      <div className="project-card__body">
        <span className="year">{item.year}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <TagList tags={item.tags} />
        {secondaryLinks.length > 0 && (
          <div className="project-card__actions" aria-label={`${item.title} links`}>
            {secondaryLinks.map((link) => {
              const Icon = linkIcons[link.type] ?? FaArrowUpRightFromSquare;

              return (
                <a className="project-card__action" href={link.href} key={`${link.label}-${link.href}`} aria-label={`${link.label} for ${item.title}`}>
                  <Icon aria-hidden="true" size={12} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
