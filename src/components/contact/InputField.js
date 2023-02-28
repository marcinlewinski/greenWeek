function InputField(props) {
    const {onBlure, touched,  className,error,onChange,values, key, type, label,    } = props;

    return (
        <>
            <label htmlFor={type}>{label}</label>
            <input className={error[type] && touched ? className : ""} onBlur={onBlure} onChange={onChange} value={values} id={type} key={key} type={type} placeholder={label}></input>
            {error[type] && touched && <p className="error">{error[type]}</p>}
        </>


    )
}

export default InputField