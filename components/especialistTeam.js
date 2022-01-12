import Especialista from "./especialist-card";

export default function EspecialistTeam({ especialistas }) {
  return (
    <>
      {especialistas.map((especialista, idx) => (
        <div key={idx}>
          <Especialista {...especialista} />
        </div>
      ))}
    </>
  );
}
