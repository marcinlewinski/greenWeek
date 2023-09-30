import React from "react";
import "react-pure-modal/dist/react-pure-modal.min.css";
import PureModal from "react-pure-modal";

function ModalDiscoverMore( props ) {
    return (<>
        <PureModal className="ModalDiscoverMore"
            shouldCloseOnEsc = {true}
            isOpen={props.open}
            header="Try this!"
            footer={props.data}
            onClose={props.close}
        >
            <p style={{'word-break': 'normal'}}>Thanks to this solution in one month we use less plastic up to:</p>
        </PureModal>
    </>)
}

export default ModalDiscoverMore