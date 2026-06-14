export default function SkillTicker({ skills }) {
  const tickerSkills = [...skills, ...skills];

  return (
    <div className="skill-ticker" aria-label="Skills">
      <ul className="tag-list skill-ticker__track">
        {tickerSkills.map((skill, index) => (
          <li key={`${skill}-${index}`} aria-hidden={index >= skills.length}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
