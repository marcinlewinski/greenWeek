function InputField(props) {
  const {
    key,
    type,
    label,
    values,
    onChange,
    className,
    error,
    touched,
    formpopup,
    workshopTitle,
  } = props;

  const defaultContent = () => {
    if (formpopup && type === 'subject') {
      return workshopTitle;
    }
    if (formpopup && type === 'message') {
      return `I'm interested i this Workshop! `;
    }
    return values;
  };

  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input
        className={error[type] ? className : ''}
        onChange={onChange}
        value={defaultContent()}
        id={type}
        key={key}
        type={type}
        placeholder={label}
      ></input>
      {error[type] && <p className="error">{error[type]}</p>}
    </>
  );
}

export default InputField;
