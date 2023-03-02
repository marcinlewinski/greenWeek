function InputField(props) {
  const {
    onBlur,
    touched,
    error,
    onChange,
    values,
    index,
    type,
    label,
    formpopup,
    workshopTitle,
  } = props;

  const defaultContent = () => {
    if (formpopup && type === 'subject') {
      return workshopTitle;
    }
    if (formpopup && type === 'message') {
      return `I'm interested in this Workshop! `;
    }
    return values;
  };

  return (
    <div className="contact-input-wrapper" id={type + '-contact'}>
      {type === 'message' ? (
        <textarea
          onBlur={onBlur}
          onChange={onChange}
          value={defaultContent()}
          id={type}
          key={index}
          type={type}
          placeholder={label}
        />
      ) : (
        <input
          onBlur={onBlur}
          onChange={onChange}
          value={defaultContent()}
          id={type}
          key={index}
          type={type}
          placeholder={label}
        />
      )}
      {error[type] && touched && <p className="error">{error[type]}</p>}
    </div>
  );
}

export default InputField;
