import Form from './Form.js';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>Contact form</h1>
          <p>If you have some idea or feedback that you would like to share, let us know!</p>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default Contact;
