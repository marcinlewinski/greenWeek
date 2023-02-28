import "./Idea.css";
import { useState } from 'react';
import ModalDiscoverMore from "../modal/ModalDiscoverMore";

const Idea = ({ img, title, description }) => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="idea">
      <div className="image-wrapper">
        <img className="idea-img" src={img} alt="{title}" />
      </div>
      <div className="text-wrapper">
        <div className="idea-content">
          <h1 className="idea-title">{title}</h1>
          <p className="idea-description">{description}</p>
        </div>
        <button className="idea-btn" onClick={() => setModal(true)}>
          Discover more!
        </button>
        <ModalDiscoverMore open={modal} close={closeModal} />
      </div>
    </div>
  );
};

export default Idea;
