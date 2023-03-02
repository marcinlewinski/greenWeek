import Form from './Form.js'
import "./Contact.css";

function Contact() {

return (
    <div className="Contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>If you have any idea that you would like to add, please share with us.</p>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default Contact;
