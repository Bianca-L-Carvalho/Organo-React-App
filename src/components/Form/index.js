import { useState } from 'react';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import Button from '../button';
import "./Form.css"


const Form = (props) => {

const [name, setName] = useState("");
const [image, setImage] = useState("");
const [position, setPosition] = useState("");
const [team, setTeam] = useState("");

const onSave = (event) => {
event.preventDefault();
console.log(team);
props.registredEmployee(
  {
    name,
    position,
    image,
    team 
  }
)

setName("")
setImage("")
setPosition("")
setTeam("")
}

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
        value={name}
        onChanged={value => setName(value)}
        required="true" 
        label="Nome" 
        placeholder="Digite seu nome" />
        <TextField 
        value={position} 
        onChanged={value => setPosition(value)}
        required="true" 
        label="Cargo" 
        placeholder="Digite seu cargo" />
        <TextField 
        value={image} 
        onChanged={value => setImage(value)}
        label="Imagem" 
        placeholder="Digite o endereço da imagem" />
       <DropdownList
       label="Time" 
       value={team}
       onChanged={value => setTeam(value)}
       itens={props.teamsName}/>
       <Button>
        Criar Card
       </Button>
      </form>
    </section>
  );
};

export default Form;
