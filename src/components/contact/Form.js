import InputField from './InputField';
import SubmissionMessage from './SubmissionMessage';
import { useFormik } from 'formik';
import { useState } from 'react';
import basicSchema from './validation';
import './Contact.css';

function Contact({ formpopup, workshopTitle }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState([
    { name: 'firstName', label: 'Name'},
    { name: 'lastName', label: 'Last name' },
    { name: 'email', label: 'Email'},
    { name: 'subject', label: 'Subject',},
    { name: 'message', label: 'Message',},
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: formpopup ? workshopTitle : '',
      message: formpopup ? 'Im interested in this Workshop!'  : '',
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      setSubmitted(true);
    },
  });

  return (
    <>
      {!submitted && (
        <form className="contact-form" onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="input-wrapper">
            {formData &&
              formData.map((data, index) => (
                <InputField
                  onBlur={formik.handleBlur}
                  touched={formik.touched[data.name]}
                  error={formik.errors}
                  onChange={formik.handleChange}
                  value={formik.values}
                  id={data.name}
                  key={index}
                  type={data.name}
                  label={data.label}
                  formpopup={formpopup}
                  workshopTitle={workshopTitle}
                ></InputField>
              ))}
            <div className="contact-label" id="contact-from">
              From:
            </div>
            <div className="contact-label" id="contact-send">
              Send:
            </div>
          </div>
          <div>
            <button className="idea-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
      {submitted && (
        <SubmissionMessage submitted={submitted} setSubmitted={setSubmitted} modal={!formpopup} />
      )}
    </>
  );
}

export default Contact;
