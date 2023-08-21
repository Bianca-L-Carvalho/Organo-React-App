import"./TextField.css";

const TextField = (props) => {
    const placeholderModified = `${props.placeholder}...`
    return (
        <div className="text-field">
            <label htmlFor="">{props.label}</label>
            <input type="text" placeholder={placeholderModified}/>
        </div>
    )
}

export default TextField;