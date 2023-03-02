import InputField from './InputField';
import SubmissionMessage from './SubmissionMessage';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import basicSchema from '.';
import './Contact.css';

function Contact({ formpopup, workshopTitle, handleSubmit }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState([
    { name: 'firstName', label: 'Name', value: '' },
    { name: 'lastName', label: 'Last name', value: '' },
    { name: 'email', label: 'Email', value: '' },
    { name: 'subject', label: 'Subject', value: '' },
    { name: 'message', label: 'message', value: '' },
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: formpopup ? workshopTitle : '',
      message: formpopup ? 'Im interested in this Workshop!' : '',
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      // alert('Your message was sent!');
      if (formpopup) handleSubmit();
      setSubmitted(true);
    },
  });

  useEffect(() => {
    console.log(`Submitted:`, submitted);
  }, [submitted]);

  return (
    <>
      <form className="contact-form" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="input-wrapper">
          {formData &&
            formData.map((data, index) => (
              <InputField
                onBlure={formik.handleBlur}
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
        {/* onClick={() => setSubmitted(true)} */}
        <div>
          <button className="idea-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {submitted && <SubmissionMessage submitted={submitted} setSubmitted={setSubmitted} />}
    </>
  );
}

export default Contact;
