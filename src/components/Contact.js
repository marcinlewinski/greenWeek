import InputField from "./InputField";
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState([
        { name: "firstName", label: "Name", value: "" },
        { name: "lastName", label: "Last name", value: "" },
        { name: "email", label: "Email", value: "" },
        { name: "subject", label: "Subject", value: "" },
        { name: "message", label: "message", value: "" },
    ])
    function handleClick(event){
        event.preventDefault();
        console.log({formData})
    }
    return (
        <div className="Contact">
            <div>
                <p>
                    If you have any idea that you would like to add to our page.
                </p>
            </div>
            <form>
                <div>
                    {formData.map((data, index) => <InputField key={index} type={data.name} label={data.label}></InputField>)}
                </div>
                <div>
                <button type="Submit" onClick={handleClick}>Submit</button>
                </div>
            </form>


        </div>
    )
}


export default Contact;