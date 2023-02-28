import React from "react";
import "react-pure-modal/dist/react-pure-modal.min.css";
import PureModal from "react-pure-modal";

function ModalDiscoverMore( props ) {
    return (<>
        <PureModal className="ModalDiscoverMore"
            shouldCloseOnEsc = {true}
            isOpen={props.open}
            header="Congrats"
            footer="Thanks to this solution You save 3 trees per day, and 10 litres of water!"
            onClose={props.close}
        >
            <p>Do not hesitate to implement this solution in Your daily life.</p>
        </PureModal>
    </>)
}

export default ModalDiscoverMore