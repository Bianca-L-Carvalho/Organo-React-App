import "./DropdownList.css"

const DropdownList = (props) => {

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select 
            required={props.required}
            value={props.value}
            onChange={event => props.onChanged(event.target.value)}>
                <option value=""></option>
             {
                props.itens.map(item => {return <option key={item}>{item}</option>})
             }
            </select>
        </div>
    )
}

export default DropdownList