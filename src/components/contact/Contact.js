import InputField from "./InputField";
import { useFormik } from "formik";
import { useState } from "react";
import basicSchema from ".";
import "./Contact.css";

function Contact({ formpopup, workshopTitle }) {
  const [formData, setFormData] = useState([
    { name: "firstName", label: "Name", value: "" },
    { name: "lastName", label: "Last name", value: "" },
    { name: "email", label: "Email", value: "" },
    { name: "subject", label: "Subject", value: "" },
    { name: "message", label: "message", value: "" },
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      alert("Your message was sent!");
    },
  });
  return (
    <div className="Contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          {formpopup ? ("") : (
            <p>If you have any idea that you would like to add, please share with us.</p>
          )}
        </div>
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
              <div className="contact-label" id="contact-from">From:</div>
              <div className="contact-label" id="contact-send">Send:</div>
          </div>
          
          <div>
            <button className="idea-btn" onClick={formik.handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
