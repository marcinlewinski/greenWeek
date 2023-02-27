function InputField(props) {
    const { key, type, label, values, onChange, className, error, touched } = props;

    return (
        <>
            <label htmlFor={type}>{label}</label>
            <input className={error[type] ? className : ""} onChange={onChange} value={values} id={type} key={key} type={type} placeholder={label}></input>
            {error[type] && <p touched className="error">{error[type]}</p>}
        </>


    )
}

export default InputField