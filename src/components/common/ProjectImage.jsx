const fallbackImage = `${import.meta.env.BASE_URL}images/project-placeholder.svg`;

export default function ProjectImage({ alt, src = fallbackImage }) {
  return (
    <figure className="project-card__media">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
