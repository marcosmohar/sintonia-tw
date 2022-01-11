import ClassCard from "./class-card";

export default function ClassList({ experiencias }) {
  return (
    <ul>
      {experiencias.map((experiencia, idx) => (
        <li key={idx}>
          {console.log(experiencia)}
          <ClassCard {...experiencia} />
        </li>
      ))}
    </ul>
  );
}
