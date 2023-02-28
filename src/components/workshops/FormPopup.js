import React from 'react';
import Contact from '../../components/contact/Contact';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const FormPopup = ({ modal, setModal, handleSubmit }) => (
  <PureModal
    header="REGISTRATION FORM"
    footer={
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    }
    isOpen={modal}
    closeButton="X"
    closeButtonPosition="header"
    onClose={() => {
      setModal(false);
      return true;
    }}
  >
    <Contact />
  </PureModal>
);

export default FormPopup;
