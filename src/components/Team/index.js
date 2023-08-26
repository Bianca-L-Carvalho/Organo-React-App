import Colaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    (props.colaborators.length > 0) ?
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
      <div className="colaboradores">
      {props.colaborators.map(colaborator => 
        <Colaborator
          key={colaborator.name}
          name={colaborator.name}
          position={colaborator.position}
          image={colaborator.image}
          color={props.primaryColor}
        />)}
      </div>
    </section> 
    : ""
  );
};

export default Team;
