import InputField from "./InputField";
import { useFormik } from "formik";
import { useState } from 'react';
import basicSchema from "./schemas";

function Contact() {
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
            <div>
                <p>
                    If you have any idea that you would like to add, please share with us.
                </p>
            </div>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div>
                    {formData && formData.map((data, index) => <InputField touched={formik.touched[data.name]} className={"input-error"} error={formik.errors} onChange={formik.handleChange} value={formik.values} id={data.name} key={index} type={data.name} label={data.label}></InputField>)}
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;