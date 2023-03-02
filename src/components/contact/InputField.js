import { useState } from "react";
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
  const [message, setMessage] = useState((formpopup && type === 'message') ? `I'm interested in this Workshop! ` : values);
  const [subject, setSubject] = useState((formpopup && type === 'subject') ? workshopTitle : values);

  function defaultContent() {
    if (formpopup && type === 'subject') {
      return workshopTitle;
    }
    if (formpopup && type === 'message') {
      return `I'm interested in this Workshop! `;
    }
    return values;
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
    onChange(event);
  };

  const handleSubjectChange = event => {
    setSubject(event.target.value);
    onChange(event);
  };

  return (
    <div className="contact-input-wrapper" id={type + '-contact'}>
      {type === 'message' ? (
        <textarea
          onBlur={onBlur}
          onChange={handleMessageChange}
          value={message}
          id={type}
          key={index}
          type={type}
          placeholder={label}
        />
      ) : (
        <input
          onBlur={onBlur}
          onChange={handleSubjectChange}
          value={subject}
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
