import ClassCard from "./class-card";

export default function ClassList({ experiencias }) {
  return (
    <ul className="bg-gradient-to-b from-sintopurple-500 to-sintopurple-600 ">
      {experiencias.map((experiencia, idx) => (
        <li key={idx}>
          <ClassCard {...experiencia} />
        </li>
      ))}
    </ul>
  );
}
