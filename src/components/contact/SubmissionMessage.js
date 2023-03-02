import 'react-pure-modal/dist/react-pure-modal.min.css';
import PureModal from 'react-pure-modal';

const SubmissionMessage = ({ submitted, setSubmitted }) => {
  return (
    <PureModal
      header="Registration Completed Successfully"
      isOpen={submitted}
      closeButton="X"
      closeButtonPosition="header"
      onClose={() => {
        setSubmitted(false);
        return true;
      }}
    >
      <p>THANK YOU!</p>
    </PureModal>
  );
};

export default SubmissionMessage;
