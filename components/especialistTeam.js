import Especialista from "./especialist-card";

export default function EspecialistTeam({ especialistas }) {
  return (
    <>
      {especialistas.map((especialista, idx) => (
        <div key={idx}>
          {console.log(especialista)}
          <Especialista {...especialista} />
        </div>
      ))}
    </>
  );
}
