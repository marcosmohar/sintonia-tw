import ClassCard from "./class-card";

export default function ClassList({ experiencias }) {
  return (
    <ul>
      {experiencias.map((experiencia, idx) => (
        <li key={idx}>
          <ClassCard {...experiencia} />
        </li>
      ))}
    </ul>
  );
}
