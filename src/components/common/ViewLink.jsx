import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ViewLink({ href, label }) {
  return (
    <a className="view-link" href={href} aria-label={label}>
      <span>View</span>
      <FaArrowUpRightFromSquare aria-hidden="true" size={13} />
    </a>
  );
}
