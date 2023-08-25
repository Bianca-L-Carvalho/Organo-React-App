import"./TextField.css";

const TextField = (props) => {
    const placeholderModified = `${props.placeholder}...`
    
    const getText =(event) => {
    props.onChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label htmlFor="">{props.label}</label>
            <input value={props.value} onChange={getText} required={props.required} type="text" placeholder={placeholderModified}/>
        </div>
    )
}

export default TextField;