import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { socials } from '../../data/portfolioData.js';

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: MdEmail,
  youtube: FaYoutube,
};

export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <span className="rail-line" />
      <div>
        {socials.map(({ href, id, label }) => {
          const Icon = socialIcons[id];

          return (
            <a href={href} key={id} aria-label={label} title={label}>
              <Icon aria-hidden="true" size={18} />
            </a>
          );
        })}
      </div>
      <span className="rail-line" />
    </aside>
  );
}
