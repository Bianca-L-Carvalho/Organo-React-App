import "./Collaborator.css"

const Colaborator = ({name, image, position, color}) => {
    return (
        <div className="colaborator">
            <div className="cabecalho" style={{backgroundColor : color}} >
                <img src={image} alt={name} />
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Colaborator