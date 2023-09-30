import 'react-pure-modal/dist/react-pure-modal.min.css';
import PureModal from 'react-pure-modal';

const SubmissionMessage = ({ submitted, setSubmitted, modal }) => {
  return modal ? (
    <PureModal
      header=" THANK YOU!"
      isOpen={submitted}
      closeButtonPosition="header"
      onClose={() => setSubmitted(false)}
    >
      <p style={{ 'word-break': 'normal' }}>Thank you for your message, we will respond shortly!</p>
    </PureModal>
  ) : (
    <>
      <p style={{ 'word-break': 'normal' }}>
        Thank you for your interest in our workshop, we will respond shortly!
      </p>
    </>
  );
};

export default SubmissionMessage;
