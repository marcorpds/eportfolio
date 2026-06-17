export default function SkillTicker({ rows }) {
  const tickerRows = rows.map((skills) => [...skills, ...skills]);

  return (
    <div className="skill-ticker" aria-label="Skills">
      {tickerRows.map((tickerSkills, rowIndex) => {
        const sourceSkills = rows[rowIndex];

        return (
          <ul className={`tag-list skill-ticker__track ${rowIndex % 2 ? 'skill-ticker__track--reverse' : ''}`} key={`skill-row-${rowIndex}`}>
            {tickerSkills.map((skill, index) => (
              <li key={`${skill}-${rowIndex}-${index}`} aria-hidden={index >= sourceSkills.length}>
                {skill}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
