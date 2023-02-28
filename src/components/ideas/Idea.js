import "./Idea.css";
const Idea = ({ img, title, description, handleModal }) => {
  return (
    <div className="idea">
      <div className='image-wrapper' style={{backgroundImage: `url(${img})`}}></div>
      <div className="idea-content">
        <h1 className="idea-title">{title}</h1>
        <p className="idea-description">{description}</p>
        <button type="submit" className="idea-btn" onClick={handleModal}>
          Discover more!
        </button>
      </div>
    </div>
  );
};

export default Idea;
