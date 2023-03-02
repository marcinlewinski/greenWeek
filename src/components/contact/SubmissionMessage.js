import 'react-pure-modal/dist/react-pure-modal.min.css';
import PureModal from 'react-pure-modal';

const SubmissionMessage = ({ submitted, setSubmitted, modal }) => {
  return modal ? (
    <PureModal
      header="Registration Completed Successfully"
      isOpen={submitted}
      closeButton="X"
      closeButtonPosition="header"
      onClose={() => {
        return true;
      }}
    >
      <p>THANK YOU!</p>
    </PureModal>
  ) : (
    <p>THANK YOU!</p>
  );
};

export default SubmissionMessage;
