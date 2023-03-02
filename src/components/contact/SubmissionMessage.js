import 'react-pure-modal/dist/react-pure-modal.min.css';
import PureModal from 'react-pure-modal';

const SubmissionMessage = ({ submitted, setSubmitted, modal }) => {
  return modal ? (
    <PureModal
      header="THANK YOU!"
      isOpen={submitted}
      closeButton="X"
      closeButtonPosition="header"
      onClose={() => {
        return true;
      }}
    >
      <p>Thank you for your interest in our workshop, we will respond shortly!</p>
    </PureModal>
  ) : (
    <>
      <p>Thank you for your interest in our workshop, we will respond shortly!</p>
    </>
  );
};

export default SubmissionMessage;
