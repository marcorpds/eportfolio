import { FaCode, FaDatabase, FaDiagramProject } from 'react-icons/fa6';

const serviceIcons = {
  code: FaCode,
  database: FaDatabase,
  project: FaDiagramProject,
};

export default function ServiceCard({ service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <article className="service-card">
      <span className="service-card__icon" aria-hidden="true">
        <Icon size={28} />
      </span>
      <h4>{service.title}</h4>
      <p>{service.body}</p>
    </article>
  );
}
