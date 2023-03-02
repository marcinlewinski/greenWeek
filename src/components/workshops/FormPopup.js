import React from 'react';
import Form from '../../components/contact/Form';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const FormPopup = ({ modal, setModal, handleSubmit, workshopTitle }) => {
  return (
    <>
      <PureModal
        header="REGISTRATION FORM"
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="header"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <Form handleSubmit={handleSubmit} formpopup={true} workshopTitle={workshopTitle} />
      </PureModal>
    </>
  );
};

export default FormPopup;
