import { useState } from 'react';
import ProjectPreview from '../components/common/ProjectPreview.jsx';

const INITIAL_VISIBLE_ITEMS = 3;

export default function ArchiveSection({ id, eyebrow, title, items }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const canExpand = items.length > INITIAL_VISIBLE_ITEMS;
  const visibleItems = isExpanded ? items : items.slice(0, INITIAL_VISIBLE_ITEMS);
  const hiddenCount = items.length - INITIAL_VISIBLE_ITEMS;

  return (
    <section className="archive-panel" id={id} aria-labelledby={`${id}-title`}>
      <div className="archive-title">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <span>{items.length} in total</span>
      </div>
      <div className="archive-list">
        {visibleItems.map((item) => (
          <ProjectPreview item={item} key={item.title} />
        ))}
      </div>
      {canExpand && (
        <button className="archive-toggle" type="button" onClick={() => setIsExpanded((current) => !current)}>
          {isExpanded ? `Show fewer ${title}` : `Show ${hiddenCount} more ${title}`}
        </button>
      )}
    </section>
  );
}
