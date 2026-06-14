import { navItems } from '../../data/portfolioData.js';

export default function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a className="brand" href="#about" aria-label="Go to about section">
        <span>MP</span>
        <small>Marco Pereira da Silva</small>
      </a>
      <nav>
        {navItems.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            <span className="nav-dot" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
