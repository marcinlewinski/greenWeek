
function InputField(props) {
    const {key,type,label} = props;

    return (
        <>
            <label>{label}</label>
            <input key={key} type={type} placeholder={label}></input>
        </>


    )
}

export default InputField