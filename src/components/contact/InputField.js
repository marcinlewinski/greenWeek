function InputField(props) {

    const {onBlure, touched, error,onChange,values, key, type, label,  formpopup, workshopTitle } = props;

    const defaultContent = () => {
        if (formpopup && type === 'subject') {
          return workshopTitle;
        }
        if (formpopup && type === 'message') {
          return `I'm interested i this Workshop! `;
        }
        return values;
      };
      
    if (type === 'message') {
      return (
        <>
        <div className='contact-input-wrapper' id={type + '-contact'}>
            <textarea onBlur={onBlure} onChange={onChange} value={defaultContent()} id={type} key={key} type={type} placeholder={label}>
            </textarea>
            {error[type] && touched && <p className="error">{error[type]}</p>}
        </div>
        </>
    )
    }
   
    return (
        <>
        <div className='contact-input-wrapper' id={type + '-contact'}>
            <input onBlur={onBlure} onChange={onChange} value={defaultContent()} id={type} key={key} type={type} placeholder={label}>
            </input>
            {error[type] && touched && <p className="error">{error[type]}</p>}
        </div>
        </>
    )
}


export default InputField;
